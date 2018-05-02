// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(string) {
    // declare ls
    // create a window length 1 to check
    let sub = "", size = 0, i = 0;
    while (i + size + 1 <= string.length) {
      sub = string.slice(i, i + size + 1);

      if (noRepeats(sub)){
        size++;
      } else {
        i++;
      }
    }
    // loop while i + window length < string length
    return size;
};

    function noRepeats(string) {
        const count = {};
        for (let i = 0; i < string.length; i++) {
          let letter = string[i];
            if (count[letter]) {
                return false;
            } else {
                count[letter] = 'counted';
            }
        }
        return true;
    }

// console.log(lengthOfLongestSubstring('apple')); // 3
// console.log(lengthOfLongestSubstring('aple')); // 4
// console.log(lengthOfLongestSubstring('bbbbb')); // 1



const nonrepeatedStr = string => {
  if (string.length <= 1) return string.length;

  // create a map of letters and most recent occurance
  const map = {};
  map[string[0]] = 0;

  let longest = 0;
  let left = 0; // leftmost non-repeat

  for (let i = 1; i < string.length; i++) {
    let char = string[i];
    if (map[char]) {
      if (map[char] > left) {
        left = map[char]; //
      }
    } else {
      let currentLength = i - left;
      if (currentLength > longest) {
        longest = currentLength;
      }
    }
    map[char] = i; //
  }
  //iterate through string
  // increment max until you encounter a repeat
  // start new window based on last index of repeated char
  console.log('left', left);
  console.log('map', map);
  return longest;
};

console.log(nonrepeatedStr('apple')); // 3
// left 1
// map { a: 0, p: 2, l: 3, e: 4 }
// 3

console.log(nonrepeatedStr('aple')); // 4
// left 0
// map { a: 0, p: 1, l: 2, e: 3 }
// 3

console.log(nonrepeatedStr('applbeajkl')); // 7 'plbeajk'  // 1 - 8
// left 3
// map { a: 6, p: 2, l: 9, b: 4, e: 5, j: 7, k: 8 }
// 7
console.log(nonrepeatedStr('bbbbb')); // 1
// left 3
// map { b: 4 }
// 2

// 'apple'
// internet solution, hard to undersand:
const lengthOfLongestSubstring2 = s => {
    // keeps track of the most recent index of each letter.
    const map = {};
    // keeps track of the starting index of the current substring.
    var left = 0;

    // reduce takes accumulator, currentValue, currentIndex, array (this)
    return s.split('').reduce((max, v, i) => {  // 0, a, 0 // 1, p, 1
        // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
        left = map[v] >= left ? map[v] + 1 : left; // left 0
        // updates last recorded index of letter to the most recent index.
        map[v] = i; // {p: 1}

        // indices of current substring is (idx - leftIdx, idx).
        // +1 because if your substring starts and ends at index 0, it still has a length of 1.
        return Math.max(max, i - left + 1);  // acc = max = 0,
    }, 0);
};
