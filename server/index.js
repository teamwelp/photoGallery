var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('../db/models/story.js');

var app = express();

mongoose.connect('mongodb://localhost/photoGallery');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/exampleBusiness', (req, res) => {
  return db.retrieveGraphics().then((data) => {
    res.send(data)
  });
});

app.post('/exampleBusiness', (req, res) => {
  let arr = req.body.map((userid) => {
    return db.retrieveUsers(userid);
  });

  Promise.all(arr).then((data)=>{
    let results = [];
    data.forEach((item) => {
      results.push(item[0]);
    });
    res.send(results);
  });

});

app.listen(8000, function() {
  console.log('listening on port 8000');
});
