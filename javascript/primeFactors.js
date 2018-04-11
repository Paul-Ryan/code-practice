function primeFactors(num) {
  let answer = [];

  for (var i = 1; i < num; i++) {
    if (num % i === 0 && isPrime(i)) {
      answer.push(i);
    }
  }

  return answer;
}

function isPrime(num) {
  if (num < 2) return false;

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


console.log(primeFactors(69));
