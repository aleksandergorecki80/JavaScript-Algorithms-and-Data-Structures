class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


// Bad way !!
var first = new Node('Hi')
first.next = new Node('there')
first.next.next = new Node('how')
first.next.next.next = new Node('are')
first.next.next.next.next = new Node('you')

console.log(first)



// Good way 

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val)
}

var list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbay')


