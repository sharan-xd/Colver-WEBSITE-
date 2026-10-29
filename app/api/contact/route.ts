import { NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  organization?: string
  email: string
  serviceType: string
  timeline?: string
  message: string
  _hp?: string // Honeypot field for bot filtering
}

// In-memory rate limiting map for basic abuse prevention
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute window
  const maxRequests = 5 // max 5 submissions per minute per IP

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

    // 2. Parse request body
    let body: ContactPayload
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON payload.' },
        { status: 400 }
      )
    }

    const { name, organization, email, serviceType, timeline, message, _hp } = body

    // 3. Honeypot check: If bot populated the hidden honeypot, return success silently
    if (_hp && _hp.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been received. Our team will contact you shortly.',
      })
    }

    // 4. Input validation
    const trimmedName = (name || '').trim()
    const trimmedEmail = (email || '').trim()
    const trimmedMessage = (message || '').trim()
    const trimmedOrg = (organization || '').trim()
    const trimmedService = (serviceType || '').trim()
    const trimmedTimeline = (timeline || '').trim()

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 150) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message must be between 10 and 5000 characters.' },
        { status: 400 }
      )
    }

    const inquiryRecord = {
      name: trimmedName,
      organization: trimmedOrg || 'N/A',
      email: trimmedEmail,
      serviceType: trimmedService || 'General Technical Inquiry',
      timeline: trimmedTimeline || 'Flexible',
      message: trimmedMessage,
      receivedAt: new Date().toISOString(),
      ip,
    }

    // 5. Dispatch mechanism
    // A) If Webhook configured (Slack, Discord, CRM)
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `*New Colver Inquiry*\n*From:* ${inquiryRecord.name} (${inquiryRecord.email})\n*Organization:* ${inquiryRecord.organization}\n*Service:* ${inquiryRecord.serviceType}\n*Timeline:* ${inquiryRecord.timeline}\n*Message:*\n${inquiryRecord.message}`,
            inquiry: inquiryRecord,
          }),
        })
      } catch (err) {
        console.error('Failed to forward inquiry to webhook:', err)
      }
    }

    // B) If Resend API Key configured
    if (process.env.RESEND_API_KEY && process.env.CONTACT_RECIPIENT_EMAIL) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.CONTACT_FROM_EMAIL || 'inquiries@colver.in',
            to: [process.env.CONTACT_RECIPIENT_EMAIL],
            subject: `New Project Inquiry: ${inquiryRecord.name} - ${inquiryRecord.serviceType}`,
            text: `Name: ${inquiryRecord.name}\nEmail: ${inquiryRecord.email}\nOrg: ${inquiryRecord.organization}\nService: ${inquiryRecord.serviceType}\nTimeline: ${inquiryRecord.timeline}\n\nMessage:\n${inquiryRecord.message}`,
          }),
        })
      } catch (err) {
        console.error('Failed to send email via Resend:', err)
      }
    }

    // Fallback log for development / audit logs
    console.log(`[INQUIRY RECORDED] From: ${inquiryRecord.name} <${inquiryRecord.email}>, Service: ${inquiryRecord.serviceType}`)

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been successfully received. A senior engineer will review your requirements and reach out promptly.',
    })
  } catch (error) {
    console.error('Error handling contact submission:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again or reach out to info@colver.in.' },
      { status: 500 }
    )
  }
}
