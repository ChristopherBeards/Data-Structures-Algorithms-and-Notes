/* Tree
Implement a Breadth-First Search and Depth-First Search on the given Tree. Each method should accept a
function that gets called with each element in the tree.
Testing: `jest Trees/test.js`
*/

/* The Node Class
Accepts an argument that gets assigned to the
data property. The children property is assigned
to an empty array to store a nodes' children.
*/
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // * Stores the new node as a child
  add(data) {
    this.children.push(new Node(data));
  }

  // * Returns everything but what we want to remove
  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  BFS(fn) {}

  DFS(fn) {}
}

module.exports = { Tree, Node };
