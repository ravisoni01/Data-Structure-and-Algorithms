function longestString(str) {
  let start = 0;
  let end = 0;
  let maxLength = 0;

  let unqiueString = new Set();

  while (end < str.length) {
    if (!unqiueString.has(str[end])) {
      unqiueString.add(str[end]);
      end++;
      maxLength = Math.max(maxLength, unqiueString.size);
    } else {
      unqiueString.delete(str[start]);
      start++;
    }
  }

  return maxLength;
}

console.log(longestString("abcscabc"));
