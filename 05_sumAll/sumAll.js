const sumAll = function (from, to) {
  if (typeof from != "number" || typeof to != "number" || from < 0 || to < 0)
    return "ERROR";

  let sum = 0;

  if (from <= to) {
    for (let i = from; i <= to; i++)
      sum += i;
  }
  else {
    for (let i = from; i >= to; i--)
      sum += i;
  }

  return sum;
};

console.log(sumAll(1, 69))
// Do not edit below this line
module.exports = sumAll;
