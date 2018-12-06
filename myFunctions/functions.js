// Add zeros infront of a number. eg: addZero(7) === "007"
const addZero = function (num) {
  let result = num.toString();
  let zero = 4 - result.length;
  for (i = 0; i < zero; i++) {
    result = "0" + result;
  }
  return result;
}
