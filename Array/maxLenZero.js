function maxLenZero(arr) {
  let maxLen = 0;
  let sum = 0;
  let sumMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      maxLen = i + 1;
    } else {
      if (sumMap.has(sum)) {
        maxLen = Math.max(maxLen, i - sumMap.get(sum));
      } else {
        sumMap.set(sum, i);
      }
    }
  }

  return maxLen;
}

let A = [9, -3, 3, -1, 6, -5];
let n = A.length;
console.log(maxLenZero(A, n));
