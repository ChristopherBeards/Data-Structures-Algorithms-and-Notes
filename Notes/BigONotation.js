/* 
* Big O Notation

* Time Complexity: The worst case runtime of an algorithm.

* Space Complexity: The amount of memory required to run an algorithm with respect to the input size.

* O(1) Constant Time: No matter how many elements we're working with, the algorithm will always take the same amount of time.

* log(n) Logarithmic Time: Doubling the number of elements doesn't double the amount of work.

* O(n) Linear: Iterating through all elements in a collection.

* O(n * log(n)) Quasilinear Time: If doubling the number of elements doesn't double the amount of work.

* O(n^2) Quadratic Time: Every element in a collection has to be compared to every other element.

* O(2^n) Exponential Time: Adding a single element to a collection doubles the processing power needed.
*/

// Constant runtime - Big O Notation:  "O(1)"
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Linear runtime - Big O Notation:  "O(n)"
function logAll(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);

// Exponential runtime - Big O Notation: "O(n^2)"
function addAndLog(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

addAndLog(['A', 'B', 'C']); // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']); // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']); // 25 pairs logged out

// Logarithmic runtime - Big O Notation: O(log n)
function binarySearch(array, key) {
  let low = 0;
  let high = array.length - 1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
