function longestString(str) {
  let start = 0;
  let end = 0;
  let maxLength = 0;

  let uniqueString = new Set();

  while (end < str.length) {
    if (!uniqueString.has(str[end])) {
      uniqueString.add(str[end]);
      end++;
      maxLength = Math.max(maxLength, uniqueString.size);
    } else {
      uniqueString.delete(str[start]);
      start++;
    }
  }
  return maxLength;
}

console.log(longestString("abccabc"));
