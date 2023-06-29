// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.

function countPair(arr, value) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
        count++;
      }
    }
  }

  return count;
}

console.log(countPair([1, 5, 7, 1], 6));
