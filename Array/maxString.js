function maxString(str) {
  let map = {};
  for (const key of str) {
    map[key] = (map[key] || 0) + 1;
  }

  let max = 1;
  let char = str[0];

  for (const key in map) {
    if (map[key] > max) {
      max = map[key];
      char = key;
    }
  }

  return char;
}

console.log(maxString("hello world"));
