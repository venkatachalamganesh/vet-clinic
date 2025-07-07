import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Validate request body
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      console.error('Missing required fields:', { name, email, phone, message });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with data:', {
      name,
      email,
      phone,
      messageLength: message.length
    });

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['your-email@example.com'], // Replace with your email
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json(data);
  } catch (error) {
    // Log the full error details
    console.error('Failed to send email:', {
      error: error instanceof Error ? {
        message: error.message,
        stack: error.stack,
        name: error.name
      } : error
    });

    // Return a more specific error message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 