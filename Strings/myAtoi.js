function myAtoi(str) {
  let i = 0;
  let n = str.length;
  let sign = 1;
  let result = 0;

  while (i < n && str[i] === " ") {
    i++;
  }

  if (i < n && (str[i] === "+" || str[i] === "-")) {
    sign = str[i] === "-" ? -1 : 1;
    i++;
  }

  while (i < n && str[i] >= "0" && str[i] <= "9") {
    result = result * 10 + parseInt(str[i]);
    i++;
  }

  return result * sign;
}

console.log(myAtoi("+123abc456"));
