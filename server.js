// requiring packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// setting up express
var app = express();
var PORT = 3000;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// connection listening
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
  });
  

  require('./app/routing/apiroutes.js')(app); 
  require('./app/routing/htmlroutes.js')(app);
  