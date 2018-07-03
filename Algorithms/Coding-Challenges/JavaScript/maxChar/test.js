const maxChar = require('./index');

test('function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Returns the most frequently used character', () => {
  expect(maxChar('abcccccccccdef')).toEqual('c');
});
