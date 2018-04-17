
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

    nums.forEach(num => {
      if (count.num === undefined) {
        count.num = 1;
      } else {
        count.num++;
      }
    });

    for (let key in count) {
      if (pk.size < k) {
        pk.insert(key);
      }
    } else {
      
    }


};

// create a min heap/priority queue to the get the top three (will be length 3)
class priorityQueue {
  constructor() {
    this.size = 0;
    this.queue = [];
  }

  peek() {

  }

  insert() {

  }

  delete() {

  }
}
