// This function takes any number and convert it to roman number.

const convertToRoman = function (num) {
  const romanNumber = {
    1	: "I",
    2	: "II",
    3	: "III",
    4	: "IV",
    5	: "V",
    6	: "VI",
    7	: "VII",
    8	: "VIII",
    9	: "IX",
    10 : "X",
  };
  const roman = [];
  if (num >= 5000) {
    for ( let i = num; i >= 5000; i -= 5000) {
      num -= 5000;
      roman.push("V");
    }
  }
  if (num >= 4000) {
    for ( let i = num; i >= 4000; i -= 4000) {
      num -= 4000;
      roman.push("MV");
    }
  }
  if (num >= 1000) {
    for ( let i = num; i >= 1000; i -= 1000) {
      num -= 1000;
      roman.push("M");
    }
  }
  if (num >= 900) {
    for ( let i = num; i >= 900; i -= 900) {
      num -= 900;
      roman.push("CM");
    }
  }
  if (num >= 500) {
    for ( let i = num; i >= 500; i -= 500) {
      num -= 500;
      roman.push("D");
    }
  }
  if (num >= 400) {
    for ( let i = num; i >= 400; i -= 400) {
      num -= 400;
      roman.push("CD");
    }
  }
  if (num >= 100) {
    for ( let i = num; i >= 100; i -= 100) {
      num -= 100;
      roman.push("C");
    }
  }
  if (num >= 90) {
    for ( let i = num; i >= 90; i -= 90) {
      num -= 90;
      roman.push("XC");
    }
  }
  if (num >= 50) {
    for ( let i = num; i >= 50; i -= 50) {
      num -= 50;
      roman.push("L");
    }
  }
  if (num >= 40) {
    for ( let i = num; i >= 40; i -= 40) {
      num -= 40;
      roman.push("XL");
    }
  }
  if (num > 10) {
    for ( let i = num; i > 10; i -= 10) {
      num -= 10;
      roman.push("X");
    }
  }
  if (num <= 10) {
    roman.push(romanNumber[num]);
  }
  return roman.join("");
}
