const countArr = require('./index');

test('function exists', () => {
  expect(typeof countArr).toEqual('function');
});

test('Returns the proper count', () => {
  expect(countArr([1, 2, 3])).toEqual(3);
});
