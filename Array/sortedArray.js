function sortedArray(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  const swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(low, mid);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      swap(mid, high);
      high--;
    }
  }
  return arr;
}

console.log(sortedArray([2, 0, 2, 1, 1, 0]));
