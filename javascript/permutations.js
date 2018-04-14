
// permutations([a, b, c]);
/* => [
  [a, b, c],
  [b, a, c],
  [b, c, a],
  [a, c, b],
  [c, a, b],
  [c, b, a]
]
*/

function permutations(arr) {
  if (arr.length <= 1) return [arr]; // [['a']]

  let pin = arr.shift();
  let newPerms = [];

  let perms = permutations(arr);

  for (let i = 0; i < perms.length; i++) {
    let perm = perms[i];
    for (let j = 0; j <= perm.length; j++) {
      let newPerm = perm.slice(0, j).concat(pin).concat(perm.slice(j));
      newPerms.push(newPerm);
    }
  }

  return newPerms;
}

console.log(permutations(['a', 'b', 'c']));
