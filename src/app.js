'use strict';

var express = require('express'),
      posts = require('./mock/post.json');

var app = express();

app.get('/', function(req, res) {
   res.send('<h1>Hello World!</h1>');
});

app.get('/blogpost', function(req, res) {
   res.send(posts);
});

app.listen(3000, function() {
   console.log('-----> The frontend server is running on port 3000.');
});
