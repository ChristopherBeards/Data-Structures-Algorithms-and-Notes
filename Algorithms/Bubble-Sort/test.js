const bubbleSort = require('./index.js');

let unsorted = [50, -10, 0, -5, 20, 10, 1];
let sorted = [-10, -5, 0, 1, 10, 20, 50];

describe('Bubble Sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(unsorted)).toEqual(sorted);
  });
});