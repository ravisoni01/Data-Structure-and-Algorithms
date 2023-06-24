const array = [2, 3, 2, 1, 6];

function findDuplicate(arr) {
  const obj = {};

  for (const el of arr) {
    obj[el] = obj[el] ? obj[el] + 1 : 1;
  }

  for (const key in obj) {
    if (obj[key] > 1) {
      return key;
    }
  }
}

findDuplicate(array);
