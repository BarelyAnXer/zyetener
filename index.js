const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
