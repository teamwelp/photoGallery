const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const businesses = mongoose.Schema({
  business_id: Number,
  business_name: String,
});

const users = mongoose.Schema({
  user_id: Number,
  user_name: String,
  profileImg: String,
  user_friends: Number,
  user_reviews: Number,
  user_elite_status: Boolean,
});

const graphics = mongoose.Schema({
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

const Businesses = mongoose.model('Businesses', businesses);
const Users = mongoose.model('Users', users);
const Graphics = mongoose.model('Graphics', graphics);


// insert Seed Data
const insertOneBusiness = (story, callback) => {
  Businesses.create(story, callback);
};

const insertOneUsers = (story, callback) => {
  Users.create(story, callback);
};

const insertOneGraphics = (story, callback) => {
  Graphics.create(story, callback);
};

const retrieveGraphics = businessId => Graphics.find({ business_id: businessId }).exec();
const retrieveUsers = userId => Users.find({ user_id: userId }).exec();
const retrieveBusiness = businessId => Businesses.find({ business_id: businessId }).exec();

exports.insertOneBusiness = insertOneBusiness;
exports.insertOneUsers = insertOneUsers;
exports.insertOneGraphics = insertOneGraphics;

exports.retrieveGraphics = retrieveGraphics;
exports.retrieveUsers = retrieveUsers;
exports.retrieveBusiness = retrieveBusiness;
