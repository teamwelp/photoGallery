const data = require('../seed_data.js');

const testUsers = data.mockupData.users;
const testBusinesses = data.mockupData.businesses;
const testGraphics = data.mockupData.graphics;

describe('test number of mock data', () => {
  test('should generate 200 fake users', () => {
    expect(testUsers.length).toBe(200);
	});

	test('should generate 200 fake businesses', () => {
    expect(testBusinesses.length).toBe(200);
	});

	test('should generate 999 fake graphics', () => {
    expect(testGraphics.length).toBe(999);
	});
});

describe('test data types for each mock data', () => {
	test('should have same data types with DB User Schema', () => {
		expect(typeof testUsers[0].id).toBe('number');
		expect(typeof testUsers[0].name).toBe('string');
		expect(typeof testUsers[0].profileImg).toBe('string');
		expect(typeof testUsers[0].friends).toBe('number');
		expect(typeof testUsers[0].reviews).toBe('number');
		expect(typeof testUsers[0].elite).toBe('boolean');
	});

	test('should have same data types with DB Business Schema', () => {
		expect(typeof testBusinesses[0].id).toBe('number');
		expect(typeof testBusinesses[0].name).toBe('string');
	});

	test('should have same data types with DB Graphics Schema', () => {
		expect(typeof testGraphics[0].id).toBe('number');
		expect(typeof testGraphics[0].business_id).toBe('number');
		expect(typeof testGraphics[0].username_id).toBe('number');
		expect(typeof testGraphics[0].graphic_link_low).toBe('string');
		expect(typeof testGraphics[0].graphic_link_high).toBe('string');
		expect(typeof testGraphics[0].caption).toBe('string');
		expect(typeof testGraphics[0].helpful).toBe('number');
		expect(typeof testGraphics[0].noHelpful).toBe('number');
	});
});
