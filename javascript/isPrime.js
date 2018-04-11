function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1)); // f
console.log(isPrime(12)); // f
console.log(isPrime(7)); // t
console.log(isPrime(29)); // t
console.log(isPrime(18)); // f
