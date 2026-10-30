/**
 * Input sanitization and security utilities for Colver
 * Prevents Cross-Site Scripting (XSS), Header Injection, and payload tampering
 */

/**
 * Escapes characters that have special meaning in HTML contexts.
 * Ensures untrusted text cannot execute scripts or break HTML layouts.
 */
export function escapeHtml(str: string): string {
  if (!str || typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Strips carriage returns, line feeds, and null bytes to prevent
 * Email Header Injection / SMTP splitting attacks in header fields (subject, from, to, name).
 */
export function sanitizeHeaderValue(str: string): string {
  if (!str || typeof str !== 'string') return ''
  return str
    .replace(/[\r\n\0]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Comprehensive input sanitizer for incoming form payloads
 */
export function sanitizeContactInput(raw: {
  name?: unknown
  organization?: unknown
  email?: unknown
  serviceType?: unknown
  timeline?: unknown
  message?: unknown
  _hp?: unknown
}) {
  const name = sanitizeHeaderValue(String(raw.name ?? ''))
  const email = sanitizeHeaderValue(String(raw.email ?? '')).toLowerCase()
  const organization = sanitizeHeaderValue(String(raw.organization ?? ''))
  const serviceType = sanitizeHeaderValue(String(raw.serviceType ?? ''))
  const timeline = sanitizeHeaderValue(String(raw.timeline ?? ''))
  const message = String(raw.message ?? '')
    .replace(/\0/g, '') // remove null bytes
    .trim()
  const honeypot = String(raw._hp ?? '').trim()

  return {
    name,
    email,
    organization: organization || 'Not specified',
    serviceType: serviceType || 'General Technical Inquiry',
    timeline: timeline || 'Flexible',
    message,
    honeypot,
    // Safe escaped variants for HTML email rendering
    escaped: {
      name: escapeHtml(name),
      email: escapeHtml(email),
      organization: escapeHtml(organization || 'Not specified'),
      serviceType: escapeHtml(serviceType || 'General Technical Inquiry'),
      timeline: escapeHtml(timeline || 'Flexible'),
      messageHtml: escapeHtml(message).replace(/\n/g, '<br />'),
    },
  }
}
