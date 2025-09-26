// function removeDuplicateFromSorted(arr) {
//   if (arr.length <= 1) return arr;

//   let repeatCount = 0;

//   let uniqueElements = [];

//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];
//     const nextElement = arr[i + 1];

//     if (currentElement != nextElement) {
//       uniqueElements.push(currentElement);
//     } else {
//       repeatCount++;
//     }
//   }

//   //   for (let i = 0; i < repeatCount; i++) {
//   //     uniqueElements.push("_");
//   //   }

//   return uniqueElements;
// }

function removeDuplicateFromSorted(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }

  return arr;
}

console.log(removeDuplicateFromSorted([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4])); // Output: [1, 2, 3, 4, 5]
