class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  add(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  remove() {
    if (!this.first) return;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    temp.next = null;
    this.size--;
    return temp;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const queue = new Queue();

queue.add(4);
queue.add(5);
// queue.add(6)
// queue.add(1)

console.log(queue.remove());

console.log(queue);
