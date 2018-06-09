/*      Linked List

A linked list is a list of elements called nodes
that are connected together in a single file.

Single Linked List - Each Node only has reference to the next node.
Double Linked list - Each Node has access to the next node and has
reference to the one before it.
*/

// We set the head and tail to null because there are no nodes yet.
function LinkedList() {
  this.head = null;
  this.tail = null;
}

/* Test - LinkedList() 
let test = new LinkedList();
console.log(test); // { head: null, tail: null }
*/

function Node(value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}

/*  Test - Node()
This would be the first node so it has no previous.
let testNode = new Node(100, 'node', null); 
console.log(testNode); // { value: 100, next: 'node', prev: null }
*/

// Add nodes to the head. New items become the Head.
LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.previous = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

/* Test - addToHead()
let testLL = new LinkedList();
testLL.addToHead(100);
console.log(testLL); // { head: {value: 100, next: null, prev: null }, 
                        tail: {value: 100, next: null, prev: null } }
*/


// Add nodes to the tail.
// The opposite of adding to the head.
LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

/* Test - addToTail()
let testLL = new LinkedList();
testLL.addToTail();
console.log(testLL); // { head: {value: 10, next: null, prev: null }, 
                        tail: {value: 10, next: null, prev: null } }
*/

// Remove the Head and return it's value.
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null; // If the list is empty.
  let val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.previous = null;
  else this.tail = null;
  return val; // All of the above is to get the value.
};

/* Test - removeHead()
let testLL = new LinkedList();
testLL.addToHead(100);
testLL.addToHead(200);
testLL.addToTail(300);
console.log(testLL.removeHead()); // 200
*/

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null; // If the list is empty.
  let val = this.tail.value;
  this.tail = this.tail.previous;
  if (this.tail) this.tail.next = null;
  else this.head = null; 
  return val;
};

/* Test - removeTail()
let testLL = new LinkedList();
testLL.addToHead('Passed In');
testLL.addToHead('Passed Inn');
testLL.addToHead('Passed Innn');
console.log(testLL.removeTail()); // 'Passed In'
*/

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

/* Tetst - search()
let testLL = new LinkedList();
testLL.addToHead(12);
testLL.addToHead(70);
testLL.addToHead('Hello World!');
testLL.addToTail(20);
testLL.addToTail('Goodbye World!');
testLL.addToTail(204);

console.log(testLL.search(12)); // 12
console.log(testLL.search(5)); // null
*/

// Takes in a value and returns all the indexes of that value, and returns them in an array.
LinkedList.prototype.indexOf = function(value) {
  let indexes = []; // Creating an array.
  let currentIndex = 0; // Establishing a counter.
  let currentNode = this.head; // Starting at current head.
  if (!this.head) return null; // No head? Why are we here?
    while(currentNode) {
      if (currentNode.value === value) {
        indexes.push(currentIndex); // If we find a matching value, store its index.
      }
      currentNode = currentNode.next; // Move onto the next node.
      currentIndex++; // Increment the index.
    }
      return indexes; // Return the indexes array with all matching values' index positions added.
};

/* Test - indexOf()
let testLL = new LinkedList();
testLL.addToTail(1); 
testLL.addToTail(2); 
testLL.addToTail(2); 
testLL.addToTail(3); 
testLL.addToTail(1); 
testLL.addToTail(5); 
console.log(testLL.indexOf(2)); // [1, 2]
*/