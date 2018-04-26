def binomail_coeff(n, k)
  return 1 if k == 0 || k == n

  binomail_coeff(n - 1, k - 1) + binomail_coeff(n, k - 1)
end


p binomail_coeff(5, 2)
