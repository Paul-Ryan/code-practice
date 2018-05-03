// countsort

// Countsort works on data between a specific range
// 1. create a count array to cover the range
// 2. count the number of instances of each element by incrementing the count array at the index that corresponds with the value of each item.
// 3. adjust the count array by adding all the previous count values at each index.
// 4. add each element to a new, sorted array at the index indicated by the count array and decrease that count by one.
//
// the array will be sorted.


const data1 = [1, 4, 1, 2, 7, 5, 2];
const data2 = [1, 4, 1, 2, 7, 5, 2, 5, 2, 0, 4, 2, 10];

function countsort(arr) {
  // 1. create a count array to cover the range
  const count = [], sorted = [];
  let max = arr[0];
  let runningTotal = 0;
  // 2. count the number of instances of each element by incrementing the count array at the index that corresponds with the value of each item.
  arr.forEach(el => {
    if (!count[el]) count[el] = 0;
    if (max < el) max = el;
    count[el]++;
  });
  // 3. adjust the count array by adding all the previous count values at each index.
  for (var i = 0; i <= max; i++) {
    if (!count[i]) count[i] = 0;
    runningTotal += count[i];
    count[i] = runningTotal;
  }

  arr.forEach(el => {
    let idx = count[el];
    sorted[idx] = el;
    count[el]--;
  });

  return sorted.slice(1); // removed 0 index
}


console.log(countsort(data1));
console.log(countsort(data2));
