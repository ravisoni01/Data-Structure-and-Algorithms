function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (let i = 0; i < maxDigitsCount; i++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBucket[digit].push(nums[j]);
    }
    nums = [].concat(...digitBucket);
  }
  return nums;
}

radixSort([32, 34, 23, 45745, 54, 35]);
