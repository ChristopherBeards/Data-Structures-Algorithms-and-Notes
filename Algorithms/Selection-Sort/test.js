const selectionSort = require('./index.js');

let unsorted = [50, -10, 0, -5, 20, 10, 1];
let sorted = [-10, -5, 0, 1, 10, 20, 50];

describe('Selection sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(unsorted)).toEqual(sorted);
  });
});