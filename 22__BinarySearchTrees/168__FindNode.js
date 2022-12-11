console.log("166__InsertingNode.js");

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let found = false;
    let current = this.root;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return {
        current: current ?? 'Not found.',
        found
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(20);
tree.insert(22);
tree.insert(22);
tree.insert(15)

console.log(tree);

const result = tree.find(200);
console.log(result);
