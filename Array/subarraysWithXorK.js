function subarraysWithXorK(arr, k) {
  const n = arr.length;
  let xor = 0;
  const map = new Map();
  map.set(xor, 1);
  let count = 0;

  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];

    const x = xor ^ k;

    count += map.get(x) || 0;

    map.set(xor, (map.get(xor) || 0) + 1);
  }

  return count;
}

const a = [4, 2, 2, 6, 4];
const k = 6;
const ans = subarraysWithXorK(a, k);
console.log(`The number of subarrays with XOR k is: ${ans}`);
