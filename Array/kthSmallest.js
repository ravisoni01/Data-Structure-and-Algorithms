let arr = [234, 234, 542, 1, 3, 54, 22, 34, 1020000, 0.5, -5];

function kthSmallest(arr, kth) {
  if (arr.length < kth) return;
  if (kth < 1) return;

  arr.sort(function (a, b) {
    return a - b;
  });

  return arr[kth - 1];
}
// console.log(kthSmallest(arr, 0));
