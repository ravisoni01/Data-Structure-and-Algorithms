function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
let i = 0;
let j = 1;

function sortArray(arr) {
  if (isSorted(arr)) {
    return arr;
  } else if (arr[i] > arr[j]) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i = 0;
    j = 1;
  } else {
    i++;
    j++;
  }
  return sortArray(arr);
}

console.log(sortArray([2, 3, 4, 5, 2, 4, 5]));
