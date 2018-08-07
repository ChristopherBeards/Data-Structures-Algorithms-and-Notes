const findVowels = require('./index');

test('findVowels is a function', () => {
  expect(typeof findVowels).toEqual('function');
});

test('returns the number of vowels ', () => {
  expect(findVowels('aeiou')).toEqual(5);
});

test('returns the number of vowels ', () => {
  expect(findVowels('aloha')).toEqual(3);
});
