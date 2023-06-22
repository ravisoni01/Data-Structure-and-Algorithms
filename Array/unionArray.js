// Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

let a = [1, 2, 3, 4];
let b = [3, 5, 6, 4, 2];

function unionArray(arr1, arr2) {
  let combineArr = [...arr1, ...arr2];
  let uniqueArray = [];

  combineArr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < combineArr.length; i++) {
    if (combineArr[i] !== combineArr[i + 1]) {
      uniqueArray.push(combineArr[i]);
    }
  }

  return uniqueArray;
}

unionArray(a, b);
