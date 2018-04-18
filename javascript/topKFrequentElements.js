
// Given a non-empty array of integers, return the k most frequent elements.
//
// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].
//
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


var topKFrequent = function(nums, k) {
    const count = {};
    const pk = new priorityQueue();

    // create a count object
    nums.forEach(num => {
      if (count.num === undefined) {
        count.num = 1;
      } else {
        count.num++;
      }
    });

    // keep a priority queue of length k, of the top k elements
    for (let key in count) {
      let node = {key: count[key]};

      if (pk.size < k) {
        pk.insert(node);
      } else {
      if (pk.peek < count[key]) {
        pk.insert(node);
        pk.delete();
      }
    }

    // return an array of the pk's keys
    const answer = [];

    pk.forEach((el) => {
      answer.push(Object.keys(el));
    });

    return answer;
}

// create a min heap/priority queue to the get the top three (will be length 3)
class priorityQueue {
  constructor() {
    this.size = 0;
    this.queue = [];
  }

  peek() {
    return this.queue[0];
  }

  insert(node) {  // must insert nodes
    this.queue.push(node);
    this.size++;
  }

  /*
        1
      2   3
    4  5  6 7
  8
[1, 2, 3, 4, 5, 6, 7, 8]

1
2: 1
3: 1

idx | parent idx
  0 \
  1 \ 0
  2 \ 0
  3 \ 1
  4 \ 1
  5 \ 2
  6 \ 2

  parent = parseInt(i / 2) - 1  and parseInt(i / 2)
  */

  extract() {
    return this.queue.delete(queue[this.queue.length - 1]);
    this.size--;
  }
}
