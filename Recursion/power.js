// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

console.log(power(2, 4));

function power(base, exponent) {
  if (exponent === 0 || exponent === 1) return base;
  return base ** exponent;
}
