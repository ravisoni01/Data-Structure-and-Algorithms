// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array . There can be negative numbers in the array , but it will always be sorted.

console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
