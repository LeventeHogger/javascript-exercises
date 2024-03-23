const reverseString = function (string) {
  let splitString = string.split('');
  let outputString = '';

  for (let i = splitString.length - 1; i >= 0; i--) {
    outputString += splitString[i];
  }

  return outputString;
};

console.log(reverseString('megfordítja azt amit ide írok'));

// Do not edit below this line
module.exports = reverseString;
