const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
connectDB();

app.use(express.json());
// app.use(cors({
//   origin: 'https://relaxed-profiterole-764f54.netlify.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://relaxed-profiterole-764f54.netlify.app"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
