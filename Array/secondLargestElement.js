function secondLargestElement(arr) {
  let largest = arr[0];
  let secondLargestElement = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element > largest) {
      secondLargestElement = largest;
      largest = element;
    } else if (element > secondLargestElement && element < largest) {
      secondLargestElement = element;
    }
  }

  return secondLargestElement;
}

console.log(secondLargestElement([8, 10, 5, 7, 9])); // Output: 9
