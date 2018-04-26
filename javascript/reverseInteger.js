// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
//
// Example 2:
//
// Input: -123
// Output: -321


function reverseInteger(int) {
  let neg = false;
  if (int < 0) neg = true;

  int = parseInt(int.toString().split('').reverse().join(''));
  if (neg) int *= -1;

  if (Math.abs(int) > 2147483648 ) return 0;
  return int;
}


console.log(reverseInteger(123));
console.log(reverseInteger(-123));
