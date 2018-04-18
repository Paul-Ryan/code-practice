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

  getSmallestChildIdx(idx) {
    const idx1 = 2 * idx + 1;
    const idx2 = idx1 + 1;

    if (this.size < idx1) return null;
    if (this.size === idx1) return idx1;

    return Math.min(idx1, idx2);
  }

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

// find children 2i + 1 and 2i + 2

// find parents - use integer division: i / 2 and (i - 2) / 2

const heap = new minHeap();
console.log(heap);
heap.insert(5);
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
console.log(heap.extract());
console.log(heap);
console.log(heap.extract());
console.log(heap);
console.log(heap.extract());
console.log(heap);
