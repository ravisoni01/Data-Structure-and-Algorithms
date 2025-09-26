function swapIfGreater(arr1, arr2, ind1, ind2) {
  if (arr1[ind1] > arr2[ind2]) {
    [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
  }
}

function merge(arr1, arr2, n, m) {
  const len = n + m;
  let gap = Math.ceil(len / 2);

  while (gap > 0) {
    let left = 0;
    let right = left + gap;

    while (right < len) {
      if (left < n && right >= n) {
        swapIfGreater(arr1, arr2, left, right - n);
      } else if (left >= n) {
        swapIfGreater(arr2, arr2, left - n, right - n);
      } else {
        swapIfGreater(arr1, arr1, left, right);
      }
      left++, right++;
    }

    if (gap == 1) break;

    gap = Math.ceil(gap / 2);
  }
}

const arr1 = [1, 4, 8, 10];
const arr2 = [2, 3, 9];
const n = 4,
  m = 3;

merge(arr1, arr2, n, m);

console.log("The merged arrays are:");
console.log(`arr1[] = ${arr1.join(" ")}`);
console.log(`arr2[] = ${arr2.join(" ")}`);
