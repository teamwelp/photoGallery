var mongoose = require('mongoose');

var businesses = mongoose.Schema({
  business_id: Number,
  business_name: String,
});

var users = mongoose.Schema({
  user_id: Number,
  user_name: String,
  profileImg: String,
  user_friends: Number,
  user_reviews: Number,
  user_elite_status: Boolean,
});

var graphics = mongoose.Schema({
  pic_id: Number,
  business_id: Number,
  username_id: Number,
  date: String,
  graphic_link_low: String,
  graphic_link_high: String,
  caption: String,
  helpful: Number,
  noHelpful: Number,
});

var Businesses = mongoose.model('Businesses', businesses);
var Users = mongoose.model('Users', users);
var Graphics = mongoose.model('Graphics', graphics);

function insertOneBusiness(story, callback) {
  Businesses.create(story, callback)
}

function insertOneUsers(story, callback) {
  Users.create(story, callback)
}

function insertOneGraphics(story, callback) {
  Graphics.create(story, callback)
}

exports.insertOneBusiness = insertOneBusiness;
exports.insertOneUsers = insertOneUsers;
exports.insertOneGraphics = insertOneGraphics;