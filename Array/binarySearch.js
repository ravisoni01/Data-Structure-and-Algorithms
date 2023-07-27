function binarySearch(arr, findvalue) {
  let first = 0;
  let last = arr.length - 1;
  let mid = Math.floor((first + last) / 2);

  while (arr[mid] !== findvalue && first <= last) {
    if (findvalue < arr[mid]) last = mid - 1;
    else first = mid + 1;
    mid = Math.floor((first + last) / 2);
  }

  return arr[mid] === findvalue ? arr[mid] : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
