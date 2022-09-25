class Node { 
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }


class SinglyLinkedList {
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val){
        var newNode = new Node(val)

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        this.length ++
        return this
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val)
            current = current.next;
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null
        }

        return current;
    }
  }
  
  var list = new SinglyLinkedList()
  
  list.push('Hello')
  console.log(list)
  console.log(list.tail.next)
  console.log(list.tail)
  
  list.push('Hov are you')
  console.log(list)
  console.log(list.tail.next)
  console.log(list.tail)

  list.push('Goodbay')
  console.log(list)
  console.log(list.tail.next)
  console.log(list.tail)

  list.traverse()
  list.pop()
  console.log(list)


  list.pop()
  console.log(list)

  list.pop()
  console.log(list)

  
list.push('You')
list.push("don't")
list.push('Know')
list.push('JS')
console.log(list)








