function removeOuterParentheses(str) {
  let result = "";
  let count = 0;

  for (const char of str) {
    if (char === "(") {
      if (count > 0) {
        result += char;
      }
      count++;
    }
    if (char === ")") {
      count--;
      if (count > 0) {
        result += char;
      }
    }
  }
  return result;
}

console.log(removeOuterParentheses("()(()())(())"));
