const reverseInteger = require('./index');

test('ReverseInt function exists', () => {
  expect(reverseInteger).toBeDefined();
});

test('reverseInteger handles 0 as an input', () => {
  expect(reverseInteger(0)).toEqual(0);
});

test('reverseInteger flips a positive number', () => {
  expect(reverseInteger(5)).toEqual(5);
  expect(reverseInteger(15)).toEqual(51);
  expect(reverseInteger(235)).toEqual(532);
});

test('reverseInteger flips a negative number', () => {
  expect(reverseInteger(-15)).toEqual(-51);
  expect(reverseInteger(-90)).toEqual(-9);
});
