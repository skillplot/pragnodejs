// ## Copyright (c) 2020 mangalbhaskar. All Rights Reserved.
const __author__ = 'mangalbhaskar'

// const port = 8000;
const appcfg = require('./app/config/settings');

const express = require('express');
var app = express();


app.get('/', function(req, res) {
  res.json({"message":"Streaming server using NodeJs"});
});


app.get('/video', function(req, res) {
  res.send('Coming Soon...');
});


app.get('/cam', function(req, res) {
  res.send('Coming Soon...');
});


app.listen(appcfg, function() {
  console.log(`Example app listening on port ${appcfg.PORT}!`)
});

