import { NextResponse } from 'next/server'
import { sanitizeContactInput } from '@/lib/sanitize'
import { dispatchInquiryEmail } from '@/lib/mailer'

// In-memory rate limiting map for basic abuse prevention (5 requests / min / IP)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000
  const maxRequests = 5

  const record = rateLimitMap.get(ip)
  if (!record || record.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs })
    return false
  }

  if (record.count >= maxRequests) {
    return true
  }

  record.count++
  return false
}

export async function POST(request: Request) {
  try {
    // 1. IP identification for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please wait a moment before trying again.' },
        { status: 429 }
      )
    }

    // 2. Parse request body safely
    let rawBody: Record<string, unknown>
    try {
      rawBody = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request payload.' },
        { status: 400 }
      )
    }

    // 3. Strict sanitization across all input boundaries (XSS & Header Injection defense)
    const sanitized = sanitizeContactInput(rawBody)

    // 4. Honeypot check: If bot populated hidden field, respond success silently
    if (sanitized.honeypot && sanitized.honeypot.length > 0) {
      console.warn(`[Security Alert] Bot trapped in honeypot from IP: ${ip}`)
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been received. Our team will contact you shortly.',
      })
    }

    // 5. Validation boundaries
    if (sanitized.name.length < 2 || sanitized.name.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitized.email) || sanitized.email.length > 150) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid business email address.' },
        { status: 400 }
      )
    }

    if (sanitized.message.length < 10 || sanitized.message.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message must be between 10 and 5000 characters.' },
        { status: 400 }
      )
    }

    const receivedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium',
    }) + ' IST'

    const inquiryData = {
      name: sanitized.name,
      email: sanitized.email,
      organization: sanitized.organization,
      serviceType: sanitized.serviceType,
      timeline: sanitized.timeline,
      message: sanitized.message,
      escaped: sanitized.escaped,
      ip,
      receivedAt,
    }

    // 6. Real-time Email & Alert Dispatch
    const dispatchResult = await dispatchInquiryEmail(inquiryData)

    console.log(`[Contact Submission] Success: ${sanitized.name} <${sanitized.email}> | Dispatch Method: ${dispatchResult.method}`)

    return NextResponse.json({
      success: true,
      message: 'Your specifications have been recorded. A senior systems architect will review your parameters and respond within 24 hours.',
    })
  } catch (error) {
    console.error('[Contact Submission Error] Unexpected failure:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected internal error occurred. Please try again or email contact@colver.in directly.' },
      { status: 500 }
    )
  }
}
