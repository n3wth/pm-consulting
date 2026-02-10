import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Log the contact form submission
    console.log('Contact form submission:', { name, email, company, message })

    // TODO: Add your email service integration here (SendGrid, Resend, etc.)
    // For now, we'll just log it and rely on the Google Forms backup

    // Send notification email via a service like Resend
    // await resend.emails.send({
    //   from: 'StrategyPM <hello@strategypm.com>',
    //   to: 'o@newth.ai',
    //   subject: `New Contact Form: ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
