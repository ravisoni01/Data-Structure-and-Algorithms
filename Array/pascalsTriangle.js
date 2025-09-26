function generateRow(row) {
  let ans = 1;
  let ansRow = [ans];

  for (let i = 0; i < row; i++) {
    ans = ans * (row - i);
    ans = ans / (i + 1);
    ansRow.push(ans);
  }

  return ansRow;
}

function pascalsTriangle(numRows) {
  let ans = [];

  for (let i = 0; i < numRows; i++) {
    ans.push(generateRow(i));
  }

  return ans;
}

console.log(pascalsTriangle(5));
