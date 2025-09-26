// function moveAllZerosToEnd(arr) {
//   let end = arr.length - 1;

//   for (let i = 0; i < end; i++) {
//     const element = arr[i];
//     if (element === 0) {
//       arr[i] = arr[end];
//       arr[end] = 0;
//       end--;
//     }
//   }

//   return arr;
// }

function moveAllZerosToEnd(arr) {
  let firstZeroIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === 0) {
      firstZeroIndex = i;
      break;
    }
  }

  if (firstZeroIndex === -1) return arr;

  for (let j = firstZeroIndex + 1; j < arr.length; j++) {
    const element = arr[j];
    if (element !== 0) {
      arr[firstZeroIndex] = element;
      arr[j] = 0;
      firstZeroIndex++;
    }
  }
  return arr;
}

console.log(moveAllZerosToEnd([1, 0, 2, 3, 0, 4, 0, 1])); // [1, 3, 12, 0, 0]
