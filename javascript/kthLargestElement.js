// # Enter your code here. Read input from STDIN. Print output to
// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// For example,
// Given [3,3,3,2,1,5,6,4,6] and k = 2, return 5.
//
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.


function kthLargest(array, k) {
    array.sort(function(a, b) { return b - a; });

    let uniqItems = [];
    let i = 0;

    while (uniqItems.length < k) {
        let el = array[i];

        if (uniqItems.indexOf(el) === -1) {
            uniqItems.unshift(el);
        }
        i++;
    }

    return uniqItems[0];
}

const arr = [3,3,3,2,1,5,6,4,6];
const k = 2;

console.log(kthLargest(arr, k)); // 5

// Other possibility is to use a min oriented priority queue that will store the K-th largest values. The algorithm iterates over the whole input and maintains the size of priority queue.

// The smart approach for this problem is to use the selection algorithm (based on the partion method - the same one as used in quicksort).
