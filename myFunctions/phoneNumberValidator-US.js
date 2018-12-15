const phoneNumberCheck = function (str) {
  const number = str.replace(/\D/g,"");
  if (parseInt(str).toString().length === 10) {
    return true;
  };
  if (number.toString().length === 10 && str[3] === "-" && str[7] === "-") {
    return true;
  };
  if (number.toString().length === 10 && str[0] === "(" && str[4] === ")" && str[8] === "-") {
    return true;
  };
  if (number.toString().length === 10 && str[3] === " " && str[7] === " " ) {
    return true;
  };
  if (parseInt(str).toString().length === 11 && str[0] === "1") {
    return true;
  };
  if (number.toString().length === 11 && str[0] === "1" && str[1] === " " && str[5] === "-" && str[9] === "-") {
    return true;
  };
  if (number.toString().length === 11 && str[0] === "1" && str[1] === "(" && str[5] === ")" && str[9] === "-") {
    return true;
  };
  if (number.toString().length === 11 && str[0] === "1" && str[1] === " " && str[2] === "(" && str[6] === ")" && str[7] === " " && str[11] === "-") {
    return true;
  };
  if (number.toString().length === 11 && str[0] === "1" && str[1] === " " && str[5] === " " && str[9] === " " ) {
    return true;
  };
  return false;
}
