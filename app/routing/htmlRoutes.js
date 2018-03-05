var path = require('path');

module.exports = function(app) { 
    
// routing to the root / home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
});

// routing to the survey page
app.get('/survey', function(req, res){
  res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });
};