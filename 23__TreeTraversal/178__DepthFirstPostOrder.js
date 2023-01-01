console.log('176__DepthFirstPostOrder.js')

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
    breadthFirstSearch(){
        const data = [];
        const queue = [];


        queue.push(this.root)

        while(queue.length){
          const node = queue.shift()
          data.push(node)

          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);

        }
        
        return data
    }
    depthFirstPreOrder(){

        const data = []

        function traverse(node){
            data.push(node.value)
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
        }

        traverse(this.root)
        return data

    }
    depthFirstPostOrder(){

        const data = []

        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            data.push(node.value)
        }

        traverse(this.root)
        return data

    }
  }
  
  const tree = new BinarySearchTree();


tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.depthFirstPostOrder())

