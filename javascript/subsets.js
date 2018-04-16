// subsets(arr) // - receives an array, returns an array containing all the subsets of the original array


let arr = [1, 2, 3];

function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const first = array[0];
  const rest = subsets(array.slice(1));

  const withFirst = rest.map(sub => [first].concat(sub));

  return withFirst.concat(rest);
}


console.log(subsets(arr)); // => [[1], [1, 2], [1, 3], [2], [2, 3], [3]]
