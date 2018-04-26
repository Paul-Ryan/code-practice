// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
// Example 1:
//
// Input: 121
// Output: true
// Example 2:
//
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Follow up:
//
// Coud you solve it without converting the integer to a string?

function palindromeNumber(num) {
  if (num < 0) return false;

  const digits = [];
  while (num > 0) {
    let digit = num % 10;
    num = (num - digit) / 10;
    digits.push(digit);
  }
  let front = 0;
  let back = digits.length - 1;

  while (front <= back) {
    if (digits[front] !== digits[back]) {
      return false;
    }

    front += 1;
    back -= 1;
  }

  return true;
}

console.log(palindromeNumber(895)); // false
console.log(palindromeNumber(46729)); // false
console.log(palindromeNumber(467764)); // true
console.log(palindromeNumber(898)); // true
console.log(palindromeNumber(-898)); // false
