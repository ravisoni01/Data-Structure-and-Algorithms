function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(["dog", "cat", "animal", "monkey"]));
