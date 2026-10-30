import nodemailer from 'nodemailer'

export interface InquiryEmailData {
  name: string
  email: string
  organization: string
  serviceType: string
  timeline: string
  message: string
  escaped: {
    name: string
    email: string
    organization: string
    serviceType: string
    timeline: string
    messageHtml: string
  }
  ip: string
  receivedAt: string
}

/**
 * Builds the dark-mode HTML email template for internal team notifications
 */
function buildNotificationHtml(data: InquiryEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry — Colver</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080808; color: #F4F1EA; margin: 0; padding: 24px; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; background-color: #101010; border: 1px solid #222222; border-radius: 4px; overflow: hidden; }
    .header { background-color: #141414; padding: 24px 32px; border-bottom: 2px solid #C8FF00; }
    .badge { display: inline-block; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #080808; background-color: #C8FF00; padding: 3px 8px; font-weight: bold; border-radius: 2px; }
    .title { font-size: 22px; font-weight: bold; margin: 12px 0 0 0; color: #F4F1EA; letter-spacing: -0.5px; }
    .content { padding: 32px; }
    .grid { margin-bottom: 24px; width: 100%; border-collapse: collapse; }
    .grid td { padding: 8px 0; vertical-align: top; }
    .label { font-size: 13px; color: #8E929A; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; width: 140px; }
    .value { font-size: 15px; color: #F4F1EA; font-weight: 500; }
    .message-box { background-color: #080808; border-left: 3px solid #C8FF00; padding: 16px 20px; margin: 20px 0; border-radius: 0 4px 4px 0; font-size: 14px; color: #BFC3C9; line-height: 1.7; }
    .cta-button { display: inline-block; background-color: #C8FF00; color: #080808; text-decoration: none; font-weight: bold; font-size: 14px; padding: 12px 24px; border-radius: 2px; margin-top: 16px; }
    .footer { padding: 20px 32px; background-color: #0d0d0d; font-size: 12px; color: #666666; font-family: monospace; border-top: 1px solid #1a1a1a; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">Incoming Client Lead</span>
      <h1 class="title">New Architecture Inquiry</h1>
    </div>
    <div class="content">
      <table class="grid">
        <tr>
          <td class="label">Client Name:</td>
          <td class="value"><strong>${data.escaped.name}</strong></td>
        </tr>
        <tr>
          <td class="label">Work Email:</td>
          <td class="value"><a href="mailto:${data.email}" style="color: #C8FF00; text-decoration: none;">${data.escaped.email}</a></td>
        </tr>
        <tr>
          <td class="label">Organization:</td>
          <td class="value">${data.escaped.organization}</td>
        </tr>
        <tr>
          <td class="label">Practice Focus:</td>
          <td class="value" style="color: #C8FF00;">${data.escaped.serviceType}</td>
        </tr>
        <tr>
          <td class="label">Timeline:</td>
          <td class="value">${data.escaped.timeline}</td>
        </tr>
      </table>

      <div style="font-size: 13px; color: #8E929A; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
        Project Specifications:
      </div>
      <div class="message-box">
        ${data.escaped.messageHtml}
      </div>

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${data.email}?subject=${encodeURIComponent('Re: Your Architecture Inquiry with Colver')}" class="cta-button">
          Direct Reply to ${data.escaped.name} &rarr;
        </a>
      </div>
    </div>
    <div class="footer">
      IP: ${data.ip} &middot; Received at: ${data.receivedAt} &middot; Colver Security Ingestion
    </div>
  </div>
</body>
</html>
  `
}

/**
 * Dispatches the inquiry to the team via Resend, SMTP, and/or Webhook
 */
export async function dispatchInquiryEmail(data: InquiryEmailData): Promise<{ sent: boolean; method: string; detail?: string }> {
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || process.env.NOTIFICATION_EMAIL || 'contact@colver.in'
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'inquiries@colver.in'
  const subject = `[Lead] ${data.name} — ${data.serviceType}`
  const htmlContent = buildNotificationHtml(data)
  const textContent = `
NEW COLVER INQUIRY
==================
Client: ${data.name} (${data.email})
Organization: ${data.organization}
Service Focus: ${data.serviceType}
Timeline: ${data.timeline}
Received At: ${data.receivedAt}
IP Address: ${data.ip}

Project Details:
${data.message}

Reply to: ${data.email}
  `.trim()

  // 1. Resend API Dispatch
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipient],
          reply_to: data.email,
          subject,
          html: htmlContent,
          text: textContent,
        }),
      })

      if (res.ok) {
        return { sent: true, method: 'Resend API' }
      }
      const errJson = await res.json()
      console.error('[Mailer] Resend API error:', errJson)
    } catch (err) {
      console.error('[Mailer] Resend fetch failed:', err)
    }
  }

  // 2. SMTP Transport Dispatch (Gmail, Zoho, SendGrid, Amazon SES, etc.)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"${data.name} via Colver" <${fromEmail}>`,
        to: recipient,
        replyTo: data.email,
        subject,
        text: textContent,
        html: htmlContent,
      })

      return { sent: true, method: 'SMTP' }
    } catch (err) {
      console.error('[Mailer] SMTP transport failed:', err)
    }
  }

  // 3. Webhook Dispatch (Slack / Discord / CRM)
  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `⚡ *New Colver Lead Received!*\n*Client:* ${data.name} (<mailto:${data.email}|${data.email}>)\n*Organization:* ${data.organization}\n*Focus:* ${data.serviceType}\n*Timeline:* ${data.timeline}\n*Message:*\n>${data.message.replace(/\n/g, '\n>')}`,
        }),
      })
      return { sent: true, method: 'Webhook' }
    } catch (err) {
      console.error('[Mailer] Webhook dispatch failed:', err)
    }
  }

  // Fallback in development or when no email provider keys are configured yet
  console.log(`[Mailer] Simulated email dispatch to ${recipient}:`, {
    subject,
    from: data.email,
  })

  return { sent: false, method: 'Console (No SMTP/Resend configured)' }
}
