const data = require('./seed_data.js');
const mongoose = require('mongoose');
const Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/photoGallery');

const seedDatabase = function (data) {
  data.mockupData.businesses.forEach((story) => {
    const business = {
      business_id: story.id,
      business_name: story.name,
    };

    Stories.insertOneBusiness(business, (err) => {
      if (err) { return (err); }
    });
  });

  data.mockupData.users.forEach((story) => {
    // console.log(story)
    const userData = {
      user_id: story.id,
      user_name: story.name,
      profileImg: story.profileImg,
      user_friends: story.friends,
      user_reviews: story.reviews,
      user_elite_status: story.elite,
    };

    Stories.insertOneUsers(userData, (err) => {
      if (err) { return (err); }
    });
  });

  data.mockupData.graphics.forEach((story) => {
    // console.log(story)
    const graphics = {
      pic_id: story.id,
      business_id: story.business_id,
      username_id: story.username_id,
      date: story.date,
      graphic_link_low: story.graphic_link_low,
      graphic_link_high: story.graphic_link_high,
      caption: story.caption,
      helpful: story.helpful,
      noHelpful: story.noHelpful,
    };

    Stories.insertOneGraphics(graphics, (err) => {
      if (err) { return (err); }
    });
  });

  return console.log('Seeded');
};

seedDatabase(data);
