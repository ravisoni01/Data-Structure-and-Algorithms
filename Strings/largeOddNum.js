function largeOddNum(str) {
  if (str.length === 1) {
    return str;
  }

  if (str[0] === "0") {
    str = str.slice(1);
  }

  if (str[str.length - 1] % 2 !== 0) {
    return str;
  }

  return largeOddNum(str.slice(0, -1));
}

console.log(largeOddNum("0214638"));
