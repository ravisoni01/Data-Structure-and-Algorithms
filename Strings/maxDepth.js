function maxDepth(str) {
  let max = 0;
  let count = 0;

  for (const element of str) {
    if (element === "(") {
      count++;
      max = Math.max(max, count);
    } else if (element === ")") {
      count--;
    }
  }
  return max;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
