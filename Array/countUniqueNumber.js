function countUniqueNumber(arr) {
  if (arr.length > 0) {
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[j]) {
        j++;
        arr[i] = arr[j];
      }
    }
    return j;
  }
}

console.log(countUniqueNumber([1, 2, 2, 3, 4, 5, 6, 6, 7, 9, 10, 10]));
