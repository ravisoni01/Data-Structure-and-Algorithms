function largestElement(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (largest < element) {
      largest = element;
    }
  }
  return largest;
}

console.log(largestElement([8, 10, 5, 7, 9])); // Output: 5
