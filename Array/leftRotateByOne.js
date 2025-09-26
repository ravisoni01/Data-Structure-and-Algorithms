function leftRotateByOne(arr) {
  if (arr.length === 0) return arr;

  let firstElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = firstElement;

  return arr;
}
console.log(leftRotateByOne([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]
