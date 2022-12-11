console.log("164__OurTreeClass.js");

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
}

const tree = new BinarySearchTree();

// Level 1
tree.root = new Node(10);

// Level 2
tree.root.left = new Node(7);
tree.root.right = new Node(15);

// Level 3 -- left
tree.root.left.left = new Node(3)
tree.root.left.right = new Node(8)

// Level 3 -- right
// tree.root.right.left = new Node(12)
tree.root.right.right = new Node(14)

console.log(tree)
