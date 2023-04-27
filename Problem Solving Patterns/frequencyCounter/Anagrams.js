// given two strings, write a function to determin if the second string is an anagram of the first . an anagram is a word, pharse , or name formed by rearranging the letter of another , such as cinema , formed from iceman .

console.log(anagram("abca", "cbaa"));

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1 === str2) {
    return true;
  }

  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    const element = str1[i];
    obj[element] ? (obj[element] += 1) : (obj[element] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    const element = str2[i];
    if (!obj[element]) {
      return false;
    } else {
      obj[element] -= 1;
    }
  }
  return true;
}
