console.log("186__Heap-Insert");

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element){
    this.values.push(element)
    this.bubleUp()
  }
  bubleUp(){
    let index = this.values.length - 1
    const element = this.values[index]
    
    console.log(index, ' index')

    // while(true){
        let parentIndex = index === 0 ? index : Math.floor((index-1) / 2);
        console.log(parentIndex, ' parentIndex')
    // }

  }
}

const heap = new MaxBinaryHeap()

heap.insert(41) // 0
heap.insert(39) // 1
heap.insert(33) // 2
heap.insert(18) // 3 
heap.insert(27) // 4
heap.insert(12) // 5
heap.insert(55) // 6

console.log(heap)
