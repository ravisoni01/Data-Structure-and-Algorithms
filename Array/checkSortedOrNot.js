function checkSortedOrNot(arr) {
  let isSorted = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }

  return isSorted;
}

console.log(checkSortedOrNot([1, 2, 3, 4, 5])); // Output: true
