// Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [2, 3, 4, 4, 5, 11, 12];

// function unionArray(arr1, arr2) {
//   let combineArr = [...arr1, ...arr2];
//   let uniqueArray = [];

//   combineArr.sort((a, b) => {
//     return a - b;
//   });

//   for (let i = 0; i < combineArr.length; i++) {
//     if (combineArr[i] !== combineArr[i + 1]) {
//       uniqueArray.push(combineArr[i]);
//     }
//   }

//   return uniqueArray;
// }
function unionArray(arr1, arr2) {
  let uniqueArray = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (uniqueArray[uniqueArray.length - 1] !== arr1[i]) {
        uniqueArray.push(arr1[i]);
      }
      i++;
    } else {
      if (uniqueArray[uniqueArray.length - 1] !== arr2[j]) {
        uniqueArray.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < arr1.length) {
    if (uniqueArray[uniqueArray.length - 1] !== arr1[i]) {
      uniqueArray.push(arr1[i]);
    }
    i++;
  }
  while (j < arr2.length) {
    if (uniqueArray[uniqueArray.length - 1] !== arr2[j]) {
      uniqueArray.push(arr2[j]);
    }
    j++;
  }

  return uniqueArray;
}

console.log(unionArray(a, b));
