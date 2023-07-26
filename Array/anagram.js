function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = {};
  for (const string of str1) {
    count[string] = (count[string] || 0) + 1;
  }

  for (const string of str2) {
    if (!count[string]) return false;
    count[string] -= 1;
  }

  return true;
}
console.log(anagram("hello", "elhlo"));
