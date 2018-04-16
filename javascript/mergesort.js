// mergesort(arr) - recieves an array, returns a sorted copy of the array by implementing merge sort sorting algorithm

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);
}


let array = [3, 2, 4, 5, 6, 7, 8, 10, 1, 2, 4, 5, 6, 2, 6, 7];
console.log("shuffled", shuffle(array));
console.log("sorted", mergeSort(array));

// the modern version of the Fisher–Yates shuffle algorithm:
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);
