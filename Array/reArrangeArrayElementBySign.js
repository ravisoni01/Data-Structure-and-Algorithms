function reArrangeArrayElementBySign(arr) {
  const positive = [];
  const negative = [];
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element >= 0) {
      positive.push(element);
    } else {
      negative.push(element);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && positive.length > 0) {
      results.push(positive.shift());
    } else if (i % 2 !== 0 && negative.length > 0) {
      results.push(negative.shift());
    }
  }

  return results;
}

console.log(reArrangeArrayElementBySign([1, 2, -3, -1, -2, 3])); // [1 -4 2 -5]
