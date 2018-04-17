// get the nth fib number

function fibonacci(num) {
  let fibs = [0, 1];

  if (num <= 2) return 1;

  while (fibs.length <= num) {
    fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
  }

  return fibs[fibs.length - 1];
}

// console.log(fibonacci(12)); // 144
// console.log(fibonacci(1)); // 1

function fibRec(num) {
  if (num <= 1) return num;

  return fibRec(num - 1) + fibRec(num - 2);
}

// console.log(fibonacci(12)); // 144
// console.log(fibonacci(1)); // 1


// can you solve it with dynamic programming?
// We can avoid the repeated work done is the method 1 by storing the Fibonacci numbers calculated so far.

// Given a number n, print n-th Fibonacci Number.

// this uses memoizaation

function fib(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  // this works for [1,1] as the first nums. Change to <= 1 for [0, 1]
  if (num <= 2) return 1;

  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo[num];
}

console.log(fib(12)); // 144
console.log(fib(1)); // 1
