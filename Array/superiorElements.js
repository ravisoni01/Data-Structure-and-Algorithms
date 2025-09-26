function superiorElements(arr) {
  let result = [];
  let maxFromRight = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      result.push(arr[i]);
    }
    maxFromRight = Math.max(maxFromRight, arr[i]);
  }

  return result.reverse();
}

console.log(superiorElements([10, 22, 12, 3, 0, 6])); // Output: [4, 5]
