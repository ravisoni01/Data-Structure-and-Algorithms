let arr = [3, 4, 62, -33, -5, -7, 23, -3, 55, 6, 7, -1];

// method 1
function allNegativeOneSide(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}
// console.log(allNegativeOneSide(arr));

// method 2
function allNegativeValueOneSide(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }
  return arr;
}
console.log(allNegativeValueOneSide(arr));
