// requiring packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// setting up express
var app = express();
var PORT = process.env.PORT || 3000;


// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


// requiring external routing files
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


// allowing static css
app.use(express.static(__dirname + "/app/css"));


// connection listening
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
  });
  