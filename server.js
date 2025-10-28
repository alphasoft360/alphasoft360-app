import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import contactData from './src/data/contactData.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/sendEmail', async (req, res) => {
  const { name, email, phone, website, message, subject } = req.body;

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
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
