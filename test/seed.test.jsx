const mongoose = require('mongoose');
const db = require('../db/models/story');

beforeAll(() => {
  mongoose.connect('mongodb://localhost/photoGallery');
});

afterAll(() => {
  // mongoose.connection.dropDatabase();
	mongoose.disconnect();
});

const fakeUserData = {
  user_id: 1234,
  user_name: 'John',
  profileImg: 'www.google.com',
  user_friends: '198',
  user_reviews: '3',
  user_elite_status: true,
};

const fakeBusinessData = {
  business_id: 10,
  business_name: 'Chipotle',
};

const fakeGraphicsData = {
  pic_id: 948,
  business_id: 10,
  username_id: 1234,
  date: null,
  graphic_link_low: 'low quality pic',
  graphic_link_high: 'high quality pic',
  caption: 'this is a picture of burrito',
  helpful: 3,
  noHelpful: 1,
};

describe('test if data inserts and retrieve into each collection', () => {
  test('insert fake user data into user collection', () => {
	  db.insertOneUsers(fakeUserData, (err) => {
      if (err) { return err; }
    });

    db.retrieveUsers(1234).then((data) => {
      expect(data[0].user_id).toBe(fakeUserData.user_id);
    });
  });

  test('insert fake businaess data into business collection', () => {
    db.insertOneBusiness(fakeBusinessData, (err) => {
      if (err) { return err; }
    });

    db.retrieveBusiness(10).then((data) => {
      expect(data[0].business_id).toBe(fakeBusinessData.business_id);
    });
  });

  test('insert fake graphics data into graphics collection', () => {
    db.insertOneGraphics(fakeGraphicsData, (err) => {
      if (err) { return err; }
		});
		
    db.retrieveGraphics((data) => {
			expect(data[0].pic_id).toBe(fakeGraphicsData.pic_id);
		});
  });
});
