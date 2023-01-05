console.log("186__Heap-Insert");

class MaxBinaryHeap {
  constructor() {
    // this.values = [];
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubleUp();
  }
  bubleUp() {


    let index = this.values.length - 1;
    const element = this.values[index];

    while (index>0) {
      let parentIndex =  Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;

    }
  }
}

const heap = new MaxBinaryHeap();

// heap.insert(41); // 0
// heap.insert(39); // 1
// heap.insert(33); // 2
// heap.insert(18); // 3
// heap.insert(27); // 4
// heap.insert(12); // 5
heap.insert(55); // 6
heap.insert(25); // 7

console.log(heap);
