function printSpiral(arr) {
  let ans = [];

  let n = arr.length;
  let m = arr[0].length;

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = m - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      const element = arr[top][i];
      ans.push(element);
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      const element = arr[i][right];
      ans.push(element);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        const element = arr[bottom][i];
        ans.push(element);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        const element = arr[i][left];
        ans.push(element);
      }
      left++;
    }
  }

  return ans;
}

let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let ans = printSpiral(mat);

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i] + " ");
}
