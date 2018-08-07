/* countArr
This function should recursively count all of the elements in an array.
Example:
countArr([1, 2, 3, 4]); // -> 4
Testing: `jest countArr/test.js`
*/

function countArr(array) {
  if (array.length) {
    return 1 + countArr(array.splice(1));
  } else {
    return 0;
  }
}

console.log(countArr([1, 2, 3, 4, 5]));

module.exports = countArr;
