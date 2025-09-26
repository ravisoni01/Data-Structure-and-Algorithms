// function reverseWords(str) {
//   let words = str.split(" ");
//   let result = "";

//   for (let i = words.length - 1; i >= 0; i--) {
//     result += words[i] + " ";
//   }
//   return result.trim();
// }
function reverseWords(str) {
  let words = str.split(" ");
  let i = 0;
  let j = words.length - 1;

  while (i < j) {
    let temp = words[i];
    words[i] = words[j];
    words[j] = temp;
    i++;
    j--;
  }

  return words.join(" ");
}

console.log(reverseWords("this is an amazing program"));
