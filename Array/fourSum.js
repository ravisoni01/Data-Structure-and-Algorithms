function fourSum(arr, target) {
  const n = arr.length;
  const ans = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;

      let k = j + 1;
      let l = n - 1;

      while (k < l) {
        let sum = arr[i] + arr[j] + arr[k] + arr[l];
        if (sum === target) {
          ans.push([arr[i], arr[j], arr[k], arr[l]]);
          k++;
          l--;

          while (k < l && arr[k] === arr[k - 1]) k++;
          while (k < l && arr[l] === arr[l + 1]) l--;
        } else if (sum < target) k++;
        else l--;
      }
    }
  }

  return ans;
}

const nums = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];
const target = 9;
const result = fourSum(nums, target);

console.log("The quadruplets are:");
for (let quad of result) {
  console.log(`[${quad.join(" ")}]`);
}
