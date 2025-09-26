function frequencySort(str) {
  const feq = {};

  for (const element of str) {
    feq[element] = (feq[element] || 0) + 1;
  }

  const sortedStr = Object.keys(feq).sort((a, b) => feq[b] - feq[a]);

  return sortedStr;
}

console.log(frequencySort("raaaajj"));
