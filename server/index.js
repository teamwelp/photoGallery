var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('../db/models/story.js');
var path = require('path')

var app = express();

mongoose.connect('mongodb://localhost/photoGallery');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public/')));
app.use('/biz/:bizId', express.static(__dirname + '/../public'));

app.get('/id/:bizId', (req, res) => {
  return db.retrieveGraphics(req.params.bizId).then((data) => {
    res.send(data)
  });
});

app.post('/id/:bizId', (req, res) => {
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

app.listen(9004, function() {
  console.log('listening on port 9004');
});
