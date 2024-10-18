// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Send email using Resend
      await resend.emails.send({
        from: 'peterberwouts@icloud', // Replace with your email
        to: 'peterberwouts@icloud.com', // Replace with recipient email
        subject: `New contact message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Error sending message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
