function pattern1(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}
function pattern2(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}
function pattern3(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      str += `${j + 1}`;
    }
    str += "\n";
  }

  return str;
}
function pattern4(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      str += `${i + 1}`;
    }
    str += "\n";
  }

  return str;
}
function pattern5(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}
function pattern6(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
      str += `${j + 1}`;
    }
    str += "\n";
  }

  return str;
}
function pattern7(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    // Space
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }

    // Star
    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }

    // Space
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }

    str += "\n";
  }

  return str;
}
function pattern8(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    // Space
    for (let j = 0; j < i; j++) {
      str += " ";
    }

    // Star
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      str += "*";
    }

    // Space
    for (let j = 0; j < i; j++) {
      str += " ";
    }

    str += "\n";
  }

  return str;
}
function pattern9(n) {
  let str = "";
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;

    if (i > n) {
      stars = 2 * n - i;
    }

    for (let j = 1; j <= stars; j++) {
      str += "*";
    }

    str += "\n";
  }

  return str;
}
function pattern10(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += (i + j) % 2 === 0 ? "1" : "0";
    }

    str += "\n";
  }

  return str;
}
function pattern11(n) {
  let str = "";
  let spaces = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    // number
    for (let j = 1; j <= i; j++) {
      str += j;
    }

    // Space
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    // number
    for (let j = i; j >= 1; j--) {
      str += j;
    }

    spaces -= 2;
    str += "\n";
  }

  return str;
}
function pattern12(n) {
  let str = "";

  let count = 1;

  for (let i = 1; i <= n; i++) {
    // number
    for (let j = 0; j < i; j++) {
      str += `${count}`;
      count++;
    }
    str += "\n";
  }

  return str;
}
function pattern13(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + j) + " ";
    }
    str += "\n";
  }

  return str;
}
function pattern14(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += String.fromCharCode(65 + j) + " ";
    }
    str += "\n";
  }

  return str;
}
function pattern15(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + i) + " ";
    }
    str += "\n";
  }

  return str;
}
function pattern16(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }

    let char = 65;
    let breakpoint = (2 * i + 1) / 2;

    // character
    for (let j = 1; j <= 2 * i + 1; j++) {
      str += String.fromCharCode(char);
      if (j <= breakpoint) char++;
      else char--;
    }
    str += "\n";
  }

  return str;
}
function pattern17(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    // spaces

    let char = 65;

    // character
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(n + char - i + j - 1) + " ";
    }
    str += "\n";
  }

  return str;
}
function pattern18(n) {
  let str = "";

  let initialSpaces = 0;
  for (let i = 0; i < n; i++) {
    // Starts
    for (let j = 0; j < n - i; j++) {
      str += "*";
    }
    // Space
    for (let j = 0; j < initialSpaces; j++) {
      str += " ";
    }
    // Starts
    for (let j = 0; j < n - i; j++) {
      str += "*";
    }

    initialSpaces += 2;
    str += "\n";
  }

  let initialSpaces2 = 2 * n - 2;
  for (let i = 1; i <= n; i++) {
    // Starts
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    // Space
    for (let j = 1; j <= initialSpaces2; j++) {
      str += " ";
    }
    // Starts
    for (let j = 0; j < i; j++) {
      str += "*";
    }

    initialSpaces2 -= 2;
    str += "\n";
  }

  return str;
}
function pattern19(n) {
  let str = "";

  let spaces = 2 * n - 2;

  for (i = 1; i <= 2 * n - 1; i++) {
    let stars = i;

    if (i > n) stars = 2 * n - i;
    // stars
    for (j = 0; j < stars; j++) {
      str += "*";
    }

    // spaces
    for (j = 0; j <= spaces; j++) {
      str += " ";
    }

    // stars
    for (let j = 0; j < stars; j++) {
      str += "*";
    }

    str += "\n";
    if (i < n) spaces -= 2;
    else spaces += 2;
  }
  return str;
}
function pattern20(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        str += "*";
      } else str += " ";
    }
    str += "\n";
  }
  return str;
}
function pattern21(n) {
  const size = 2 * n - 1;

  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      const top = i;
      const left = j;
      const right = size - 1 - j;
      const bottom = size - 1 - i;

      const minDist = Math.min(top, bottom, left, right);
      row += n - minDist + " ";
    }
    console.log(row.trim());
  }
}
function main(n) {
  return pattern21(n);
}

console.log(main(5));
