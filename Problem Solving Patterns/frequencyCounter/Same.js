// Write a function which accept two arrays . The function should return true if the every value in the array has it's corresponding value squared in the second array . the frequency of values must be the same .

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     const currentElement = arr2.indexOf(arr1[i] ** 2);
//     if (currentElement === -1) {
//       return false;
//     }
//     arr2.splice(currentElement, 1);

//     return true;
//   }
// }
// same([1, 2, 3, 4], [1, 4, 9, 16])

// ------- refactor
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCount1 = {};
  let frequencyCount2 = {};

  for (const val of arr1) {
    frequencyCount1[val] = (frequencyCount1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCount2[val] = (frequencyCount2[val] || 0) + 1;
  }
  for (const key in frequencyCount1) {
    if (!(key ** 2 in frequencyCount2)) {
      return false;
    }
    if (frequencyCount2[key ** 2] !== frequencyCount1[key]) {
      return false;
    }
  }
  return true;
}
console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));
