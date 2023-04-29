// write a function called maxSubArray which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array.

// function maxSubArray(arr, num) {
//   if (num > arr.length) return;
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

console.log(maxSubArray([1, 2, 3, 4, 3, 2, 4, 5], 5));

// ----- Refactor

function maxSubArray(arr, num) {
  if (num > arr.length) return;
  let temp = 0;
  let max = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let j = num; j < arr.length; j++) {
    temp = temp - arr[j - num] + arr[j];
    max = Math.max(max, temp);
  }
  return max;
}
