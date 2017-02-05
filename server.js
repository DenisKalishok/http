/**
 * Created by denis on 30.01.2017.
 */
// Get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');

// Get routes
const friends = require('./routes/friends');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/dist')));

app.use('/friends', friends);

// Catch all other routes and return the index file
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(config.port, function() {
  console.log('API running on localhost:' + config.port);
});
