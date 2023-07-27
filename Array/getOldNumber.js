function getOldNumerbs(arr) {
  let oddsNumber = [];

  function helperFunction(array) {
    if (array.length === 0) return;
    else if (array[0] % 2 !== 0) {
      oddsNumber.push(array[0]);
    }
    helperFunction(array.splice(1));
  }
  helperFunction(arr);

  return oddsNumber;
}

console.log(getOldNumerbs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
