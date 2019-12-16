// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 3000;

// Getting data from json files
var packageData = require('./package.json');

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// create a route for the /info endpoint
app.get('/info', (req, res) => {
  res.send({ serverName: packageData.name, serverVersion: packageData.version });
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});