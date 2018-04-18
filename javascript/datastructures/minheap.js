class minHeap {
  constructor() {
    this.size = 0;
    this.heap = [];
  }

  peak() {
    return this.heap[0];
  }

  insert(node) { // inserts in correct position
    this.heap.push(node);
    this.size++;
    this.heapifyUp(this.size - 1);
  }

  extract() {

  }// removes min element -

  getParentIdx(idx) {
    return parseInt((idx - 1) / 2 );
  }

  heapifyUp(idx) {
    if (this.size === 1) return idx;

    let parentIdx = this.getParentIdx(idx);
    if (this.heap[idx] < this.heap[parentIdx]) {
      // swap elements
      let temp = this.heap[idx];
      this.heap[idx] = this.heap[parentIdx];
      this.heap[parentIdx] = temp;
      this.heapifyUp(parentIdx);
    }
    return idx;
  }
}

// find children 2i + 1 and 2i + 2

// find parents - use integer division: i / 2 and (i - 2) / 2

const heap = new minHeap();
console.log(heap);
heap.insert(1);
heap.insert(4);
heap.insert(6);
heap.insert(6);
heap.insert(5);
heap.insert(2);
heap.insert(1);
heap.insert(4);
heap.insert(10);
heap.insert(3);
heap.insert(8);
heap.insert(9);
heap.insert(5);
heap.insert(11);
heap.insert(1);
console.log(heap);
