import { Resend } from 'resend';
import contactData from '../src/data/contactData.js';
import fetch from 'node-fetch';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, website, message, subject, token } = req.body;

  // Verify reCAPTCHA token
  if (!token) {
    return res.status(400).json({ error: 'CAPTCHA token is required' });
  }

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
  const verifyResponse = await fetch(verifyUrl, { method: 'POST' });
  const verifyData = await verifyResponse.json();

  if (!verifyData.success) {
    return res.status(400).json({ error: 'CAPTCHA verification failed' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: contactData.email,
      subject: subject || 'New Form Submission from AlphaSoft Website',
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
