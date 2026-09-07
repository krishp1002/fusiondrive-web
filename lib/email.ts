import { Resend } from "resend"

export interface ContactNotificationData {
  name: string
  email: string
  subject: string
  message: string
  createdAt?: string | Date
}

export async function sendContactNotificationEmail(data: ContactNotificationData) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn(
      "[Resend Email] RESEND_API_KEY environment variable is not set. Email notification skipped."
    )
    return { success: false, skipped: true, error: "RESEND_API_KEY not configured" }
  }

  const resend = new Resend(apiKey)

  // Recipient is always the official FusionDrive inbox
  const toEmail = "info@fusiondrive.in"

  // From address defaults to custom domain or Resend sandbox fallback
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "FusionDrive Contact <onboarding@resend.dev>"

  const submissionDate = data.createdAt
    ? new Date(data.createdAt).toUTCString()
    : new Date().toUTCString()

  const subjectLine = `[FusionDrive Contact] ${data.subject} — from ${data.name}`

  // HTML email template
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${data.subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
    .header { background: #0f172a; color: #ffffff; padding: 24px 28px; }
    .header h1 { margin: 0; font-size: 18px; font-weight: 700; letter-spacing: -0.02em; }
    .header p { margin: 4px 0 0 0; font-size: 13px; color: #94a3b8; }
    .content { padding: 28px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0f172a; font-weight: 500; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; color: #334155; white-space: pre-wrap; word-break: break-word; line-height: 1.6; }
    .footer { padding: 20px 28px; background: #f1f5f9; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
    .badge { display: inline-block; background: #eff6ff; border: 1px solid #dbeafe; color: #1677ff; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Submission</h1>
      <p>Received via FusionDrive website contact form</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Sender Name</div>
        <div class="field-value">${escapeHtml(data.name)}</div>
      </div>
      <div class="field">
        <div class="field-label">Sender Email</div>
        <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color: #1677ff; text-decoration: none;">${escapeHtml(data.email)}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Subject</div>
        <div class="field-value">${escapeHtml(data.subject)}</div>
      </div>
      <div class="field">
        <div class="field-label">Message</div>
        <div class="message-box">${escapeHtml(data.message)}</div>
      </div>
      <div class="field" style="margin-bottom: 0;">
        <div class="field-label">Submission Timestamp</div>
        <div class="field-value" style="font-size: 13px; color: #64748b;">${submissionDate} (UTC)</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">This email was sent automatically by the FusionDrive web platform.</p>
      <p style="margin: 4px 0 0 0;">You can reply directly to this email to contact <strong>${escapeHtml(data.name)}</strong>.</p>
    </div>
  </div>
</body>
</html>
  `.trim()

  const textContent = `
New Contact Submission — FusionDrive
=====================================
From: ${data.name} (${data.email})
Subject: ${data.subject}
Date: ${submissionDate} (UTC)

Message:
${data.message}

-------------------------------------
Reply-To: ${data.email}
  `.trim()

  try {
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: subjectLine,
      html: htmlContent,
      text: textContent,
    })

    if (resendError) {
      console.error("[Resend Email] Email delivery error:", resendError)
      return { success: false, error: resendError.message }
    }

    return { success: true, id: resendData?.id }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error("[Resend Email] Unexpected sending exception:", message)
    return { success: false, error: message }
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
