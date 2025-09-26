function countingFrequencies(arr) {
  const frequencyMap = {};

  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  const frequencyArr = [];

  const frequencyKeys = Object.keys(frequencyMap);

  for (let i = 0; i < frequencyKeys.length; i++) {
    const element = frequencyKeys[i];
    frequencyArr.push([element, frequencyMap[element]]);
  }

  return frequencyArr;
}

console.log(countingFrequencies([1, 2, 2, 1, 3]));
