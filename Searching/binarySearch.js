function binarySearch(arr, findValue) {
  let first = 0;
  let last = arr.length - 1;
  let middle = Math.floor((first + last) / 2);

  while (arr[middle] !== findValue && first <= last) {
    if (findValue < arr[middle]) last = middle - 1;
    else first = middle + 1;
    middle = Math.floor((first + last) / 2);
  }
  return arr[middle] === findValue ? middle : -1;
}

binarySearch([1, 3, 4, 5, 8, 10, 33, 44, 65, 78, 98, 112, 320], 22);
