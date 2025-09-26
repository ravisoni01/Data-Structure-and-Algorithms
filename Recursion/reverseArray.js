function reverseArray(arr) {
  const reverseArr = [];
  if (arr.length === 0) return [];

  const lastElement = arr.pop();

  reverseArr.push(lastElement);

  return reverseArr.concat(reverseArray(arr));
}

console.log(reverseArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
