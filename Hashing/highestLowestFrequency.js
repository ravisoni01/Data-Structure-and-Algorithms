function highestLowestFrequency(arr) {
  const frequencyMap = {};
  let lowestFrequency = Infinity;
  let lowestFrequencyKey = null;
  let highestFrequency = 0;
  let highestFrequencyKey = null;

  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;

    if (frequencyMap[num] > highestFrequency) {
      highestFrequency = frequencyMap[num];
      highestFrequencyKey = num;
    }

    if (frequencyMap[num] === 1 || frequencyMap[num] < lowestFrequency) {
      lowestFrequency = frequencyMap[num];
      lowestFrequencyKey = num;
    }
  }

  return {
    highestFrequency: highestFrequencyKey,
    lowestFrequency: lowestFrequencyKey,
  };
}

console.log(highestLowestFrequency([10, 5, 10, 15, 10, 5]));
