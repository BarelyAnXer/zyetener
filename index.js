const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
// const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

app.use(express.json());
app.use(cors());

// Serve static files of React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// Define API routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// Handle all other requests
// app.get('*', (req, res) => {
//   console.log(path.join(__dirname, 'frontend/dist', 'index.html'))
//   res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
