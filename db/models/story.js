var mongoose = require('mongoose');

var businesses = mongoose.Schema({
  business_id: Number,
  business_name: String,
});

var users = mongoose.Schema({
  user_id: Number,
  user_name: Number,
  profileImg: Boolean,
  user_friends: String,
  user_reviews: String,
  user_elite_status: Boolean,
});

var graphics = mongoose.Schema({
  pic_id: Number,
  business_id: Number,
  username_id: Number,
  date: String,
  graphic_link: String,
  caption: String,
  helpful: Number,
  noHelpful: Number,
});

var Businesses = mongoose.model('Businesses', businesses);
var Users = mongoose.model('Users', users);
var Graphics = mongoose.model('Graphics', graphics);


