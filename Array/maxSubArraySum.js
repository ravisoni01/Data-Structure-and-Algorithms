function maxSubArraySum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  let start = 0;
  let andStart = -1;
  let ansEnd = -1;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum === 0) start = i;

    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      andStart = start;
      ansEnd = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  for (let i = andStart; i < ansEnd; i++) {
    const element = arr[i];
    console.log(element);
  }

  return maxSum;
}

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
