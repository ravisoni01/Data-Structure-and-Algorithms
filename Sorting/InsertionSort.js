function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var currentEle = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentEle; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentEle;
  }
  return arr;
}

insertionSort([22, 12, 56, 33, 45, 776, 43, 1]);
