function mergeOverlappingIntervals(arr) {
  const n = arr.length;

  arr.sort((a, b) => a[0] - b[0]);

  const ans = [arr[0]];

  for (let i = 1; i < n; i++) {
    const last = ans[ans.length - 1];
    const curr = arr[i];

    // if the current interval overlaps with the last interval
    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    }
    // if the current interval does not overlap with the last interval
    else {
      ans.push(curr);
    }
  }

  return ans;
}

const arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const ans = mergeOverlappingIntervals(arr);
console.log("The merged intervals are:");
for (let it of ans) {
  console.log(`[${it[0]}, ${it[1]}]`);
}
