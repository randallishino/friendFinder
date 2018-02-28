// requiring our packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var PORT = 3000;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
