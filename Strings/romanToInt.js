function romanToInt(str) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let count = 0;
  let i = 0;

  for (const element of str) {
    if (roman[element] < roman[str[i + 1]]) {
      count -= roman[element];
    } else {
      count += roman[element];
    }
    i++;
  }

  return count;
}

console.log(romanToInt("XLII"));
