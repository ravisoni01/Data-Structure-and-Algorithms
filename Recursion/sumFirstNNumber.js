function sumOfFirstN(n, current = 1) {
  let sum = 0;

  if (current > n) return 0;

  sum = current + sumOfFirstN(n, current + 1);

  return sum;
}

console.log(sumOfFirstN(2));
