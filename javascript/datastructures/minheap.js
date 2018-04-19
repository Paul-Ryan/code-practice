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
    this.size--;

    // swap root and last element
    const temp = this.heap[this.size];
    this.heap[this.size] = this.heap[0];
    this.heap[0] = temp;

    const removed = this.heap.pop();
    this.heapifyDown(0);

    return removed;
  }// removes min element -

  // private functions

// find children 2i + 1 and 2i + 2
  getSmallestChildIdx(idx) {
    const idx1 = 2 * idx + 1;
    const idx2 = idx1 + 1;

    // no off by one because we reduce size of array before calc idx
    if (this.size < idx1) return null;
    if (this.size === idx1) return idx1;

    if (this.heap[idx1] <= this.heap[idx2]) {
      return idx1;
    } else {
      return idx2;
    }
  }

  // find parents - use integer division: i / 2 and (i - 2) / 2
  getParentIdx(idx) {
    return parseInt((idx - 1) / 2 );
  }

  heapifyDown(idx) {
    if (this.size === 1) return idx;

    const childIdx = this.getSmallestChildIdx(idx);
    if (childIdx === null) return idx;

    const current = this.heap[idx];
    const child = this.heap[childIdx];

    if (current > child) {
      // swap current and child
      const temp = current;
      this.heap[idx] = child;
      this.heap[childIdx] = temp;

      this.heapifyDown(childIdx);
    }
    return idx;
  }

  // move element to correct position from bottom
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


// TESTS

const heap = new minHeap();

const arr= [];

for (let i = 15; i > 0; i--) {
  heap.insert(i);
}
console.log(heap);
// console.log(heap.insert(8));
heap.extract();
console.log(heap);
heap.extract();
heap.extract();
heap.extract();
heap.extract();
console.log(heap);
