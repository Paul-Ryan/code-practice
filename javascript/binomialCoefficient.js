// Write a function that takes two parameters n and k and returns the value of Binomial Coefficient C(n, k). For example, your function should return 6 for n = 4 and k = 2, and it should return 10 for n = 5 and k = 2

// The value of C(n, k) can be recursively calculated using following standard formula for Binomial Coefficients.
//
//    C(n, k) = C(n-1, k-1) + C(n-1, k)
//    C(n, 0) = C(n, n) = 1

// binomialCo(4, 2) => 6

// binomialCo(5, 2) => 10
/*
1, 2
1, 3
1, 4
1, 5
2, 3
2, 4
2, 5
3, 4
3, 5
4, 5
*/

function binomialCo(n, k) {
  if (k === 0 || k === n) {
    return 1;
  }

  return binomialCo((n - 1), (k - 1)) + binomialCo((n - 1), k);
}


console.log(binomialCo(4, 2)); //  => 6


/*
              (4, 2)
    (3, 1)            (4, 1)
(2, 0)  (2, 1)    (3, 0)  (3, 1)
      (1, 0) (1, 1)     (2, 0) (2, 1)
                              (1, 0) (1, 1)
                                    
*/
