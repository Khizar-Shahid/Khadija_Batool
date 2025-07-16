const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint for contact form
app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure your email transport (example: Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_GMAIL_ADDRESS@gmail.com', // <-- Replace with your Gmail address
      pass: 'YOUR_GMAIL_APP_PASSWORD',      // <-- Replace with your Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'YOUR_GMAIL_ADDRESS@gmail.com', // <-- Replace with your Gmail address
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 