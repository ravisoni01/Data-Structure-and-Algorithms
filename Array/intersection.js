let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [2, 3, 4, 4, 5, 11, 12];

function intersection(arr1, arr2) {
  let intersectionArray = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      intersectionArray.push(arr1[i]);
      i++;
      j++;
    }
  }

  return intersectionArray;
}

console.log(intersection(a, b));
