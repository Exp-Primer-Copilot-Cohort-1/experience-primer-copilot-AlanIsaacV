// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsFile = path.join(__dirname, 'comments.json');
var comments = [];

// Read comments from comments.json
fs.readFile(commentsFile, 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    comments = JSON.parse(data);
  }
});

// Use body-parser to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// POST /comments
app.post('/comments', function(req, res) {
  var comment = {