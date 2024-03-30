const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  const sorted = people.sort((a, b) => {
    if (!a.yearOfDeath)
      a.yearOfDeath = currentYear;
    if (!b.yearOfDeath)
      b.yearOfDeath = currentYear;

    return a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1
  });

  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
