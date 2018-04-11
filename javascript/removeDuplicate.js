// How would you remove duplicate members from an array?

function removeDuplicate(array) {
  let counter = new Object;

  for (var i = 0; i < array.length; i++) {
    let el = array[i];

    if (el in counter) {
      counter[el]++;
    } else {
      counter[el] = 1;
    }
  }

  return Object.keys(counter);
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1])); // [1, 3, 5, 6, 7, 8]
console.log(removeDuplicate([1,3])); // [1, 3]
