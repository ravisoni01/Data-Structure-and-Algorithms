function findOneElement(arr) {
  const nums = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    nums[element] = (nums[element] || 0) + 1;
  }

  for (const key in nums) {
    if (nums[key] === 1) {
      return parseInt(key, 10);
    }
  }

  return null; // If no unique element is found
}

console.log(findOneElement([1, 1, 2, 3, 3, 4, 5, 5])); // Output: 2
