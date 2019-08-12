const express = require('express');
const axios = require('axios');
const morgan = require('morgan');

const port = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'))


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/test', (req, res) => {
  res.send('did you receive this message');
});
