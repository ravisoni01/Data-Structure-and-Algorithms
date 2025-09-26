// function longestSubArraySum(arr, targetSum) {
//   let left = 0;
//   let right = 0;
//   let maxLength = 0;
//   let sum = arr[0];
//   let n = arr.length;

//   while (right < n) {
//     while (left <= right && sum > targetSum) {
//       sum -= arr[left];
//       left++;
//     }

//     if (sum === targetSum) {
//       maxLength = Math.max(maxLength, right - left + 1);
//     }

//     right++;

//     if (right < n) {
//       sum += arr[right];
//     }
//   }

//   return maxLength;
// }
function longestSubArraySum(arr, targetSum) {
  let maxLength = 0;
  let sum = 0;
  let sumMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;

    if (sum === targetSum) {
      maxLength = Math.max(maxLength, i + 1);
    }

    if (sumMap.has(sum - targetSum)) {
      maxLength = Math.max(maxLength, i - sumMap.get(sum - targetSum));
    }
    if (!sumMap.has(sum)) {
      sumMap.set(sum, i);
    }
  }

  return maxLength;
}

console.log(longestSubArraySum([2, 3, 5], 5));
