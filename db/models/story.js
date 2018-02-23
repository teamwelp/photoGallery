const mongoose = require('mongoose');

let businesses = mongoose.Schema({
  business_id: Number,
  business_name: String,
});

let users = mongoose.Schema({
  user_id: Number,
  user_name: String,
  profileImg: String,
  user_friends: Number,
  user_reviews: Number,
  user_elite_status: Boolean,
});

let graphics = mongoose.Schema({
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

let Businesses = mongoose.model('Businesses', businesses);
let Users = mongoose.model('Users', users);
let Graphics = mongoose.model('Graphics', graphics);


//insert Seed Data
let insertOneBusiness = (story, callback) => {
  Businesses.create(story, callback)
}

let insertOneUsers = (story, callback) => {
  Users.create(story, callback)
}

let insertOneGraphics = (story, callback) => {
  Graphics.create(story, callback)
}

//retrieve photos

let retrieve = (callback) => {
  Graphics
  .find({})
  .limit(3)
  .exec((err, data) => {
    if (err) throw err;
    callback(data);
  });
}

exports.insertOneBusiness = insertOneBusiness;
exports.insertOneUsers = insertOneUsers;
exports.insertOneGraphics = insertOneGraphics;

exports.retrieve = retrieve;