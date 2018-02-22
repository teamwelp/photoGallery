var data = require('./seed_data.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photoGallery');

var seedDatabase = function(data) {

    data.businesses.forEach((story) => {
        var business = {
            business_id: story.businesses.business_id,
            business_name: story.businesses.business_name,
        };
    });

    Stories.insertOne(business, (err) => {
        if(err) { return (err)};
    });

    data.users.forEach((story) => {
        var userData = {
            user_id: story.users.user_id,
            user_name: story.users.user_name,
            profileImg: story.users.profileImg,
            user_friends: story.users.user_friends,
            user_reviews: story.users.user_reviews,
            user_elite_status: story.users.user_elite_status,
        };  
    });

    Stories.insertOne(business, (err) => {
        if(err) { return (err)};
    });

    data.graphics.forEach((story) => {
        var graphics = {
            pic_up: story.graphics.pic_ud,
            business_id: story.graphics.business_id,
            username_id: story.graphics.user_id,
            date: story.graphics.date,
            graphic_link: story.graphics.graphic_link,
            caption: story.graphics.caption,
            helpful: story.graphics.helpful,
            noHelpful: story.graphics.noHelpful,
        };
    });

    Stories.insertOne(graphics, (err) => {
        if(err) { return (err)};
    });

};

seedDatabase(data);