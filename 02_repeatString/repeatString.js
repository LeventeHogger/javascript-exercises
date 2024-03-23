const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }

  let currentString = '';
  for (let i = 0; i < num; i++) {
    currentString += string;
  }
  return currentString;
};

console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
