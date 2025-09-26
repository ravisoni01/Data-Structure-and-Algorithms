function beautySum(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let map = new Map();

    for (let j = i; j < s.length; j++) {
      map.set(s[j], map.get(s[j]) + 1 || 1);

      let max = 0;
      let min = Infinity;
      for (let [key, value] of map) {
        max = Math.max(max, value);
        min = Math.min(min, value);
      }
      sum += max - min;
    }
  }

  return sum;
}

console.log(beautySum("aabcb"));
console.log(beautySum("xyx"));
