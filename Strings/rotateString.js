function rotateString(s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return true;

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i) + s.slice(0, i) === t) {
      return true;
    }
  }

  return false;
}

console.log(rotateString("abcde", "cdeab"));
