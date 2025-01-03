// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let bookings = [];

app.post('/api/book', (req, res) => {
  const { date, time, guests, name, contact } = req.body;
  const newBooking = { date, time, guests, name, contact };
  bookings.push(newBooking);
  res.json({ message: 'Booking successful!', booking: newBooking });
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

// Serve static files from the 'out' directory
app.use(express.static(path.join(__dirname, 'out')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
