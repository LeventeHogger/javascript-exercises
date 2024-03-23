const removeFromArray = function (targetArray, ...itemsToRemove) {
  let outputArray = [];

  for (let i = 0; i < targetArray.length; i++) {
    if (!itemsToRemove.includes(targetArray[i]))
      outputArray.push(targetArray[i]);
  }

  return outputArray;
};

console.log(removeFromArray([1, 2, 3], 2))

// Do not edit below this line
module.exports = removeFromArray;
