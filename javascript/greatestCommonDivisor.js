//  find the greatest common divisor of two numbers?

function greatestCommonDivisor(num1, num2) {
  let facs1 = factors(num1).reverse();

  for (var i = 0; i < facs1.length; i++) {
    let fac = facs1[i];
    if (num2 % fac === 0) {
      return fac;
    }
  }

  return -1;
}

function factors(num) {
  let nums = [];

  for (var i = 1; i <= num; i++) {
    if (num % i === 0) nums.push(i);
  }

  return nums;
}


console.log(greatestCommonDivisor(14, 21)); // 7
console.log(greatestCommonDivisor(69, 169)); // 1
