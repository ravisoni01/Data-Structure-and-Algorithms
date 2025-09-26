function longestSuccessiveElements(arr) {
  const set = new Set(arr);
  let maxLength = 0;

  for (const element of set) {
    if (!set.has(element - 1)) {
      let count = 1;

      while (set.has(element + count)) {
        count++;
      }
      maxLength = Math.max(maxLength, count);
    }
  }
  return maxLength;
}

console.log(longestSuccessiveElements([100, 200, 1, 1, 3, 2])); // Output: 5
