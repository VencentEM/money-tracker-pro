const express = require('express');
const cors = require('cors');
const app = express();
const port = 5040;

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Test GET endpoint
app.get('/api/test', (req, res) => {
  res.json({ body: 'test ok' });
});

// POST endpoint for transactions
app.post('/api/transaction', (req, res) => {
  console.log('Received transaction:', req.body); // Log the incoming data
  res.json({ message: 'Transaction received', data: req.body });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});