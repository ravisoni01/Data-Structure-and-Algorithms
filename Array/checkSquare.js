// method - 1
// function checkSquare(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         isSquare = true;
//       }
//       if (j === arr2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

// method - 2
function checkSquare(arr1, arr2) {
  let map1 = {};
  let map2 = {};

  for (const item1 of arr1) {
    map1[item1] = (map1[item1] || 0) + 1;
  }
  for (const item2 of arr2) {
    map2[item2] = (map2[item2] || 0) + 1;
  }
  for (const key in map1) {
    if (!map2[key * key]) return false;
    if (map2[key * key] !== map1[key]) return false;
  }
  return true;
}

console.log(checkSquare([1, 2, 3, 2], [1, 4, 9, 4]));
