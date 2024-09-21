import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    try {
      // Handle the form submission here (e.g., send an email or store in a database)
      // For now, we'll just log the form data to the console
      console.log('Form data:', { name, email, message });

      // Send a success response
      return res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to submit form' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
