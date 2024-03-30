const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((total, current) => total + current, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, current) => total * current, 1);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
