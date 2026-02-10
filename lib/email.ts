import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

export const sendEmail = async ({ to, subject, html, from = 'Oliver @ StrategyPM <o@newth.ai>' }: EmailOptions) => {
  try {
    const data = await resend.emails.send({
      from,
      to,
      subject,
      html,
    })
    return { success: true, data }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}

export const sendBookingConfirmation = async (
  email: string,
  name: string,
  sessionDate: Date,
  zoomLink: string
) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(sessionDate)

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 40px 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: 600; }
          .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">🎉 Session Confirmed!</h1>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Your PM strategy session is confirmed and ready to go!</p>
            
            <div class="details">
              <h3 style="margin-top: 0; color: #667eea;">Session Details</h3>
              <p><strong>📅 Date & Time:</strong><br>${formattedDate}</p>
              <p><strong>⏱️ Duration:</strong> 60 minutes</p>
              <p><strong>💰 Investment:</strong> $300</p>
            </div>

            <p style="text-align: center;">
              <a href="${zoomLink}" class="button">Join Zoom Meeting</a>
            </p>

            <p><strong>What to prepare:</strong></p>
            <ul>
              <li>Current roadmap or product overview (if available)</li>
              <li>Specific challenges you're facing</li>
              <li>Any questions about prioritization or strategy</li>
            </ul>

            <p>Looking forward to helping you level up your product roadmap!</p>
            
            <p>Best,<br><strong>Oliver</strong><br>Product Strategy Consultant</p>
          </div>
          <div class="footer">
            <p>StrategyPM | Professional Product Management Consulting</p>
          </div>
        </div>
      </body>
    </html>
  `

  return sendEmail({
    to: email,
    subject: '✅ Your PM Strategy Session is Confirmed',
    html,
  })
}

export const sendLeadWelcome = async (email: string, name: string, topic: string) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .content { background: #f9fafb; padding: 40px 30px; border-radius: 10px; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <h2 style="color: #667eea;">Thanks for reaching out!</h2>
            <p>Hi ${name},</p>
            <p>I received your inquiry about <strong>${topic}</strong>.</p>
            <p>I'll review your needs and get back to you within 24 hours with next steps.</p>
            <p>In the meantime, feel free to <a href="${process.env.NEXT_PUBLIC_APP_URL}/book">schedule a consultation</a> if you'd like to jump right in.</p>
            <p>Best,<br><strong>Oliver</strong></p>
          </div>
          <div class="footer">
            <p>StrategyPM | Professional Product Management Consulting</p>
          </div>
        </div>
      </body>
    </html>
  `

  return sendEmail({
    to: email,
    subject: 'Thanks for Your Interest in PM Strategy Consulting',
    html,
  })
}

export const sendLeadFollowup = async (email: string, name: string, topic: string) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .content { background: #f9fafb; padding: 40px 30px; border-radius: 10px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: 600; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <h2 style="color: #667eea;">Following up on your PM strategy needs</h2>
            <p>Hi ${name},</p>
            <p>Just following up on your inquiry about <strong>${topic}</strong>.</p>
            <p>Are you still interested in exploring how we can help with:</p>
            <ul>
              <li>Product roadmap clarity & prioritization</li>
              <li>Strategic frameworks for decision-making</li>
              <li>Stakeholder alignment strategies</li>
            </ul>
            <p style="text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/book" class="button">Schedule a Session</a>
            </p>
            <p>Or reply to this email if you'd prefer to discuss first.</p>
            <p>Best,<br><strong>Oliver</strong></p>
          </div>
          <div class="footer">
            <p>StrategyPM | Professional Product Management Consulting</p>
          </div>
        </div>
      </body>
    </html>
  `

  return sendEmail({
    to: email,
    subject: 'Following Up: Your PM Strategy Needs',
    html,
  })
}
