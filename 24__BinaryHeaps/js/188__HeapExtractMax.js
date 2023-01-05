console.log("HeapExtractMax.js");

console.log("186__Heap-Insert");

class MaxBinaryHeap {
  constructor() {
    // this.values = [];
    this.values = [55, 39, 41, 18, 27, 12, 33];
  }
  insert(element) {
    this.values.push(element);
    this.bubleUp();
  }
  bubleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  //             [55, 39, 41, 18, 27, 12, 33]
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();
    return max;
  }

  sinkDown() {
    // sinking down the element from the reoot
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      let leftChild = "";
      let rightChild = "";
      let swap = null;

      if (leftChild < length) {
        leftChild = this.values[leftChild];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
            swap = rightChildIndex;
        }
      }

      if(swap === null) break;
      this.values[index] = this.values[swap]
      this.values[swap] = element;
      index = swap;

    }
  }
}

const heap = new MaxBinaryHeap();

console.log(heap);

heap.extractMax()

console.log(heap);
