const express = require('express');

const app = express();

const config = require('./config');

app.get('/', (req, res) => {
  res.send('LinkedIn auto responses server running!');
});

app.listen(3000, () => {
  console.log(`Listening on port ${config.port}`);
});
