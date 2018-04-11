// get the nth fib number

function fibonacci(num) {
  let fibs = [0, 1];

  if (num <= 2) return 1;

  while (fibs.length <= num) {
    fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
  }

  return fibs[fibs.length - 1];
}

console.log(fibonacci(12)); // 144
console.log(fibonacci(1)); // 1

function fibRec(num) {
  if (num <= 1) return num;

  return fibRec(num - 1) + fibRec(num - 2);
}

console.log(fibonacci(12)); // 144
console.log(fibonacci(1)); // 1
