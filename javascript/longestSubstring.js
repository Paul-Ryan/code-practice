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
    let sub = "", size = 1, i = 0;

    // loop while i + window length < string length

};

    function countLetters(string) {
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


console.log(countLetters(""));
console.log(countLetters("aaa"));
console.log(countLetters("apple"));
console.log(countLetters("aple"));
console.log(countLetters("a"));
console.log(lengthOfLongestSubstring('apple')); // 3
console.log(lengthOfLongestSubstring('aple')); // 4
console.log(lengthOfLongestSubstring('bbbbb')); // 1
