const balancedBrackets = require('./index');

test('function exists', () => {
  expect(typeof balancedBrackets).toEqual('function');
});

test('Returns true with balanced brackets', () => {
  expect(balancedBrackets('{}')).toEqual(true);
});

test('Returns false with unbalanced brackets', () => {
  expect(balancedBrackets('{[]')).toEqual(false)
})