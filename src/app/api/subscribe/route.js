// src/app/api/subscribe/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, message, variant } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'luxyherb@gmail.com',
      subject: `New Waitlist Signup - ${variant}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">New Waitlist Signup! 🎉</h2>
          
          <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; border-left: 4px solid #16a34a;">
            <h3 style="margin: 0 0 10px 0; color: #166534;">Customer Details:</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Variant Interested In:</strong> ${variant}</p>
            ${message ? `<p><strong>Message/Review:</strong> ${message}</p>` : ''}
            <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #fffbeb; border-radius: 10px;">
            <p style="margin: 0; color: #92400e;">
              <strong>Note:</strong> This is a new waitlist signup from your Luxy Herb landing page.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Successfully joined waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}