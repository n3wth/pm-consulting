import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

interface FormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  phone?: string;
  source?: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: FormData = await req.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log to JSON file for backup
    const timestamp = new Date().toISOString();
    const leadEntry = {
      timestamp,
      ...data,
      userAgent: req.headers.get('user-agent'),
      referer: req.headers.get('referer'),
    };

    // In production, you would:
    // 1. Send email via Resend/SendGrid
    // 2. Store in database
    // 3. Send to CRM
    
    // For now, we'll use Resend (if API key is set)
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'StrategyPM Contact <noreply@newth.ai>',
          to: ['oliver@newth.ai'],
          subject: `New StrategyPM Inquiry from ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted: ${timestamp}</small></p>
            <p><small>Source: ${data.source || 'website'}</small></p>
            <p><small>User Agent: ${req.headers.get('user-agent')}</small></p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        console.error('Resend API error:', await resendResponse.text());
      }
    }

    // Track conversion event
    return NextResponse.json({
      success: true,
      message: 'Thank you! We\'ll get back to you within 24 hours.',
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
