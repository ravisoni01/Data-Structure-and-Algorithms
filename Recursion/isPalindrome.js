console.log(isPalindrome("helleh"));

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length <= 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// function isPalindrome(str) {
//   function helper(str) {
//     if (str.length <= 0) return str;
//     return helper(str.slice(1)) + str[0];
//   }

//   if (str === helper(str)) {
//     return true;
//   }
//   return false;
// }
