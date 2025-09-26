function nextPermutation(arr) {
  const n = arr.length;

  let ind = -1;

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      ind = i;
      break;
    }
  }

  if (ind === -1) {
    arr.reverse();
    return arr;
  }

  for (let i = n - 1; i > ind; i--) {
    if (arr[i] > arr[ind]) {
      [arr[i], arr[ind]] = [arr[ind], arr[i]];
      break;
    }
  }

  arr.splice(ind + 1, n - ind - 1, ...arr.slice(ind + 1).reverse());

  return arr;
}

console.log(nextPermutation([1, 3, 2]));
