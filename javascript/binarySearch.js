function bSearch(array, target) {
  if (array.length === 0) return -1;

  const probeIdx = Math.floor(array.length / 2);
  const probe = array[probeIdx];

  if (probe === target) {
    return probeIdx;
  } else if (probe > target) {
    return bSearch(array.slice(0, probeIdx), target);
  } else {
    const rightSub = bSearch(array.slice(probeIdx + 1), target);
    return rightSub === -1 ? -1 : rightSub + probeIdx + 1;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(bSearch(arr, 2)); // 1
console.log(bSearch(arr, 15));  // -1
console.log(bSearch(arr, 9)); // 8
console.log(bSearch(arr, 6)); // 5
