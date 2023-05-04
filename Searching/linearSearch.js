function linearSearch(arr, findValue) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === findValue) {
      return i;
    }
  }
  return -1;
}

linearSearch([1, 45, 23, 453, 6, 5, 23, 43, 45, 345, 3, 12], 45);
