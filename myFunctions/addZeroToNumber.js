// Add zeros infront of a number. eg: addZero(7) === "007"
const addZero = function (number, lengthYouWant) {
  let result = number.toString();
  const zeros = lengthYouWant - result.length;
  if (zeros < 0) {
    console.log("The length of the result you want need to be longer than length of the number you put in.");
    return;
  } else {
    for (i = 0; i < zeros; i++) {
      result = "0" + result;
    }
    return result;
  }
}
