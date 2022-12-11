class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  add(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  remove() {
    if (!this.first) return;
    let temp = this.first;    
    if (this.first === this.last) {
      console.log("only one");
      this.last = null;
    }
    
    this.first = this.first.next;
    temp.next = null;

    this.size--;
    return temp;
  }
}

const stack = new Stack();

stack.add("c");
stack.add("b");
// stack.add("a");

console.log(stack);

console.log(stack.remove());
// console.log(stack.remove());
// console.log(stack.remove());

console.log(stack);
