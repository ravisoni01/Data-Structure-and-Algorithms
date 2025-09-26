// function leftRotateByN(arr, d) {
//   let n = d % arr.length;

//   if (arr.length === 0) return arr;

//   let tempArr = [];

//   for (let i = n; i < arr.length; i++) {
//     const element = arr[i];
//     tempArr.push(element);
//   }
//   for (let i = 0; i < n; i++) {
//     const element = arr[i];
//     tempArr.push(element);
//   }

//   return tempArr;
// }

function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

function leftRotateByN(arr, d) {
  reverse(arr, 0, d - 1);
  reverse(arr, d, arr.length - 1);
  reverse(arr, 0, arr.length - 1);

  return arr;
}

console.log(leftRotateByN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // Output: [2, 3, 4, 5, 1]
