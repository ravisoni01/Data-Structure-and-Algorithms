function anagramStrings(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;

  let count = {};

  for (const element of str1) {
    count[element] = (count[element] || 0) + 1;
  }

  for (const element of str2) {
    if (!count[element]) {
      return false;
    }
    count[element] -= 1;
  }

  return true;
}

console.log(anagramStrings("listen", "silent"));
