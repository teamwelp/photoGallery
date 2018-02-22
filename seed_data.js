const names = [`Oleg's`, `Nick's`, `John's`,   `Melvin's`, `Andrea's`, `Toby's`];
const food = ['Burger', 'Pizza', 'Hot Dog', 'Sandwich', 'Sushi', 'Curry'];
const suffix = ['Palace', 'Fusion', 'Saloon', 'Reactor', 'Emporium', 'Shack', 'Buffet'];

const title = ['Count', 'Duke', 'King', 'Empress', 'Princess', 'Esquire'];
const firstName = ['Melvin', 'Fred', 'Ivy', 'Sue'];
const suffixUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const wordbox = ['hello', 'wow', 'I', 'am', 
                'cool', 'bye', 'interesting', 'ok',
                'read', 'play', 'money', 'then',
                'read', 'someday', 'he', 'she',
                ];

let randomNumberGenerator = () => {
  return Math.floor(Math.random() * Math.floor(500));
}

let randomBoolean = () => {
  return Math.random() < 0.3;
  //30% true, 70% false
}

let url = "https://picsum.photos/30/30?image="

let mockupData = {businesses: [], users: []};
let count = 200;
for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < food.length; j++) {
    for (let k = 0; k < suffix.length; k++) {
      let businessName = names[i] + ' ' + food[j] + ' ' + suffix[k];
      mockupData.businesses.push({id: count, name: businessName});
      count++;
    }
  }
}

mockupData.businesses = mockupData.businesses.slice(0, 200);

let userCount = 0;
for (let i = 0; i < title.length; i++) {
    for (let j = 0; j < firstName.length; j++) {
        for (let k = 0; k < suffixUser.length; k++) {
            let userName = title[i] + firstName[j] + suffixUser[k];
            mockupData.users.push(
              { id: userCount, 
                name: userName, 
                profileImg: url + randomNumberGenerator(), 
                friends: randomNumberGenerator(), 
                reviews: randomNumberGenerator(), 
                elite: randomBoolean()
              }
            );
            userCount++;
        }
    }
}

mockupData.users = mockupData.users.slice(0, 200);

let randomrestaurant_id  = () => {
  return Math.floor(Math.random() * Math.floor(200)) + 200;
}

let randomuser_id  = () => {
  return Math.floor(Math.random() * Math.floor(200));
}

let captionGenerator = () => {
  return wordbox[Math.floor(Math.random()*Math.floor(15))] + ' ' 
  + wordbox[Math.floor(Math.random()*Math.floor(15))] + ' ' 
  + wordbox[Math.floor(Math.random()*Math.floor(15))] + ' ' 
  + wordbox[Math.floor(Math.random()*Math.floor(15))] + ' ' 
  + wordbox[Math.floor(Math.random()*Math.floor(15))] + ' ' 
  + wordbox[Math.floor(Math.random()*Math.floor(15))] + ' ' 
  + wordbox[Math.floor(Math.random()*Math.floor(15))] + ' ' 
  + wordbox[Math.floor(Math.random()*Math.floor(15))] + ' ' 
  + wordbox[Math.floor(Math.random()*Math.floor(15))] + '!';
}

let randomHelpfulGenerator = () => {
  return Math.floor(Math.random() * Math.floor(29));
}

let randomUnHelpfulGenerator = () => {
  return Math.floor(Math.random() * Math.floor(4));
}

let graphics = [];

let mockGraphicLink =  "https://picsum.photos/250/250?image="
let mockGraphicLinkHigh= "https://picsum.photos/700/650?image="

for(let l = 0; l < 999; l++) {
  graphics.push({
    id: l,
    business_id: randomrestaurant_id(), 
    username_id: randomuser_id(), 
    date: null,
    graphic_link_low: mockGraphicLink + l,
    graphic_link_high: mockGraphicLinkHigh + l,
    caption: captionGenerator(), /*?*/
    helpful: randomHelpfulGenerator(),
    noHelpful: randomUnHelpfulGenerator()
  })
}

mockupData.graphics = graphics;

//mockupData.businesses/*?*/
//mockupData.users /*?*/ 
//mockupData.graphics /*?*/

exports.mockupData = mockupData;
// exports.users = mockupData.users;
// exports.graphics = mockupData.graphics;