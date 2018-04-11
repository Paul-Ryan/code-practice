// merge two sorted array

// hint - keep a pointer for each array

function mergeSortedArray(arr1, arr2) {
  let pointer1 = 0, pointer2 = 0;
  const answer = [];

  while(answer.length < arr1.length + arr2.length) {
    let el1 = arr1[pointer1], el2 = arr2[pointer2];

    if (!el1 || el1 > el2) {
      answer.push(el2);
      pointer2++;
    } else {
      answer.push(el1);
      pointer1++;
    }
  }

  return answer;
}


console.log(mergeSortedArray([2,5,6,9], [1,2,3,29])); // [1, 2, 2, 3, 5, 6, 9, 29]
console.log(mergeSortedArray([2,5,6,9, 99, 109], [1,2,3,29])); // [1, 2, 2, 3, 5, 6, 9, 29]
