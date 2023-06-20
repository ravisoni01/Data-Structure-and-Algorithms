let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// method 1
function reverseArray(arr) {
  let tempArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let elem = arr[i];
    tempArr.push(elem);
  }
  return tempArr;
}
// console.log(reverseArray(arr));

// method 2
function reverseArr(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
// console.log(reverseArr(arr, 0, arr.length - 1));

// method 3
console.log(arr.reverse());
