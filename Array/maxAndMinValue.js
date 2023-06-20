let arr = [234, 234, 542, 1, 3, 54, 22, 34, 1020000, 0.5, -5];

// method 1
function findMaxAndMin(arr) {
  let min = arr[0];
  let max = arr[1];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  return { min, max };
}
// console.log(findMaxAndMin(arr));

// method 2
function findMaxAndMinVal(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return { min: arr[0], max: arr[arr.length - 1] };
}
console.log(findMaxAndMinVal(arr));
