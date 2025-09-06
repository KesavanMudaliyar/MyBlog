const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Store subscriptions and messages (in a real app, use a database)
let subscriptions = [];
let messages = [];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for form submissions
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ 
      success: false, 
      message: 'Email is required' 
    });
  }
  
  // Check if already subscribed
  if (subscriptions.includes(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'This email is already subscribed' 
    });
  }
  
  // Add to subscriptions
  subscriptions.push(email);
  console.log(`New subscription: ${email}`);
  console.log(`Total subscriptions: ${subscriptions.length}`);
  
  res.json({ 
    success: true, 
    message: 'Thank you for subscribing!' 
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }
  
  // Add to messages
  messages.push({ name, email, subject, message, date: new Date() });
  console.log(`New contact message from: ${name} (${email})`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log(`Total messages: ${messages.length}`);
  
  res.json({ 
    success: true, 
    message: 'Your message has been sent successfully!' 
  });
});

// API endpoint to get stats (for demonstration)
app.get('/api/stats', (req, res) => {
  res.json({
    subscriptions: subscriptions.length,
    messages: messages.length
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Genzee Tech$Blog server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});