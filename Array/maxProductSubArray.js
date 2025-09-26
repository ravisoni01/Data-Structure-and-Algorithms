// function maxProductSubArray(nums) {
//   let prod1 = nums[0];
//   let prod2 = nums[0];
//   let result = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 0) {
//       prod1 = 1;
//       prod2 = 1;
//       continue;
//     }
//     prod1 = prod1 * nums[i];
//     prod2 = prod2 * nums[nums.length - 1 - i];
//     result = Math.max(result, Math.max(prod1, prod2));
//   }
//   return result;
// }
function maxProductSubArray(nums) {
  let prod1 = nums[0];
  let prod2 = nums[0];
  let result = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let temp = Math.max(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod2 = Math.min(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod1 = temp;
    result = Math.max(result, prod1);
  }
  return result;
}

console.log(maxProductSubArray([2, 3, -2, 4])); // 6
