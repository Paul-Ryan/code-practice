// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true

// var vals = Object.keys(countries).map(function(key) {
//     return countries[key];
// });


function validParentheses(string) {
    const pStack = [];
    const pKey = { ')': '(', '}': '{', ']': '[' };
    // push openers onto stack
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (Object.keys(pKey).indexOf(char) !== -1) {
          let pair = pStack.pop();
          if (pair !== pKey[char]) return false;
        } else {
          pStack.push(char);
        }
    }
    // remove and check pairs of closers
    // check if stack is empty
    return pStack.length === 0;
}

console.log(validParentheses('()[]{}'));  // true
console.log(validParentheses('()'));  // true
console.log(validParentheses('(]'));  // false
console.log(validParentheses('([)]'));  // false
console.log(validParentheses('{[]}'));  // true
