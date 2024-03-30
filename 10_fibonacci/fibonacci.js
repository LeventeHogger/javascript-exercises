const fibonacci = function (which) {
  if (typeof which != "number")
    parseInt(which);

  if (which < 0)
    return "OOPS";

  const sequence = [0, 1];
  for (let i = 2; i <= parseInt(which); i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }

  return sequence[which];
};

console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
