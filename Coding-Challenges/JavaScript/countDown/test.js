const countDown = require('./index');

test('Returns an array counting down from 100 to 1 as expected', () => {
  let data = countDown();

  expect(data[0]).toEqual(100);
  expect(data[data.length - 1]).toEqual(1);
});