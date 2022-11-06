class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      var newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.head) return undefined;
      var poppedNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
    }
    shift() {
      if (this.length === 0) return undefined;
      let oldHed = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHed.next;
        this.head.prev = null;
        oldHed.next = null;
      }
      this.length--;
      return oldHed;
    }
    unshift(val) {
      const newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
  
      this.length++;
      return this;
    }
    get(index) {
      if (index < 0 || index >= this.length) return;
  
      if (index <= this.length / 2) {
        let count = 0;
        let current = this.head;
        while (count !== index) {
          current = current.next;
          count++;
        }
        return current;
      } else {
        let count = this.length - 1;
        let current = this.tail;
        while (count !== index) {
          current = current.prev;
          count--;
        }
        return current;
      }
    }
    set(index, value) {
      const foundNode = this.get(index);
      if(foundNode){
          foundNode.val = value;
          return true;
      }
      return false;
    }

    insert(index, value){
      if(index < 0 || index > this.length) return;
      if(index ===0) return this.unshift(value);
      if(index === this.length) return this.push(value);
      let newNode = new Node(value);
      let beforeNode = this.get(index-1);
      let afterNode = beforeNode.next;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      beforeNode.next = newNode;
      afterNode.prev = newNode;
      this.length++;
      return newNode; 
    }

    remove(index){
      if(index < 0 || index >= this.length) return
      if(index === 0) return this.shift()
      if(index === this.length-1) return this.pop()

      let foundNode = this.get(index);
      foundNode.prev.next = foundNode.next;
      foundNode.next.prev = foundNode.prev
      foundNode.prev = null;
      foundNode.next = null;

      this.length--;
      return foundNode;

    }

    print(){
      var arr = [];
      var current = this.head;
      while(current){
          arr.push(current.val);
          current = current.next;
      }
      console.log(arr)
  }
  }
  
  const list = new DoublyLinkedList();
  


  list.push(6);
  list.push(7);
  list.push(8);
  list.push(9);
  list.push(10);
  
  list.print()
  
  
  console.log(list.remove(2))
  
  
  
  console.log(list);