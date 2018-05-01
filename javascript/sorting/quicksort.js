function quicksort(array) {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const left = [], right = [];

  array.slice(1).forEach(el => {
    if (el >= pivot) {
      right.push(el);
    } else {
      left.push(el);
    }
  });

  return quicksort(left).concat([pivot]).concat(quicksort(right));
}


console.log(quicksort([4, 5, 1, 4, 7, 8, 0, 3, 5, 6, 7, 5]));


function quicksort2(array) {
  if (array.length <= 1) return array;

  const pivot = array.pop();

  const left = quicksort2(array.filter(el => el < pivot));
  const right = quicksort2(array.filter(el => el >= pivot));

  return left.concat([pivot]).concat(right);
}

console.log(quicksort2([4, 5, 1, 4, 7, 8, 0, 3, 5, 6, 7, 5]));
