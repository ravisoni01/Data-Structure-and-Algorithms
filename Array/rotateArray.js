// Given an array, rotate the array by one position in clock-wise direction.

const array = [1, 2, 3, 4, 5];

function rotateArray(arr) {
  let lastElement = arr[arr.length - 1];

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastElement;
  return arr;
}

rotateArray(array);
