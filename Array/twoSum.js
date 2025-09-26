// function twoSum(arr, num) {
//   let map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (map.has(num - element)) {
//       return [map.get(num - element), i];
//     }
//     map.set(element, i);
//   }
//   return [-1, -1];
// }
function twoSum(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  const sortedArr = [...arr].sort((a, b) => a - b);

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === num) {
      return "Yes";
    }
    if (sum < num) {
      left++;
    } else {
      right--;
    }
  }

  return "No";
}

console.log(twoSum([1, 11, 7, 15, 2], 9)); // Output: [0, 1]
