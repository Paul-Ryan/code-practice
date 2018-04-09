/*
Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

[4, 4, 4], k = 3 => true // (4), (4), (4)
[1, 2, 3], k = 2 => true // (1, 2), (3)
[1, 1, 1, 3, 3], k = 3 => true // (1, 1, 1), (3), (3)
[4, 3, 2, 3, 5, 2, 1], k = 4, => true // (5), (1, 4), (2,3), (2,3)
[1, 2, 4], k = 2 => false (1, 2) != (4)

answer = [[] [] [] []];

[4, 3, 2, 3, 5, 2, 1]  => [1, 2, 2, 3, 3, 4, 5]  == 20  // 20/4 = 5
[1, 1, 1, 3, 3], k = 3 => true // (1, 1, 1), (3), (3)
[1, 1, 1, 3, 3] = 9 // 9/3 = 3
*/
// [[], [], []] target 3


// add our numbers and divide by k to get the target value
// sort our nums array values
// iterate through our nums and try to put them in the correct subsets while subset val < target

var canPartitionKSubsets = function(nums, k) {
    let target = getTarget(nums, k);
    if (target === -1) { return false; }

    let subsets = [...Array(k)].map(e => Array());

    //largest number first.
    let numbers = nums.slice(0).sort((a, b) => b - a );

    // start with the largest value in our numbers array and work down to the smallest
    // always add the largest value possible to the current subset, until it equals the target
    // if we go over the target, return false.
    // [1, 2, 2, 3, 3, 4, 5]
    // [5] [4, 1] [3, 2] [3, 2]
    // k = 4, target = 5
    //  [1, (2), 2, 3, (3), 4, 5] (5) (4,1) (2,3)

    while (numbers.length > 1) {

    }

    // while (numbers.length > 1) {
    //   // set pointers to the front and back
    //   // check the sum and move a pointer based on the result
    //   // when the sum matches the target, push to the solution
    //   let start_idx = numbers[numbers.length - 1];
    //   let end_idx = numbers[0];
    //   let sum = numbers[start_idx] + numbers[end_idx];
    //
    //   while (start_idx < end_idx) {
    //     if (sum > target) {
    //       end_idx++;
    //     } else if (sum < target) {
    //       start_idx++;
    //     } else {
    //       // won't work becuase we may have more than 2 items in a subset
    //     }
    //   }
    // }


};

function getTarget(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    let int = Math.floor(sum/k) === sum / k;

    if (int) {
        return sum / k;
    } else {
        return -1;
    }
}
