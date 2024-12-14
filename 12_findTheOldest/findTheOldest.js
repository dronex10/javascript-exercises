const findTheOldest = function(people) {
  const sortedAges = people.sort((a, b) => {
      a.yearOfDeath = a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear();
      b.yearOfDeath = b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear();
      const aAge = a.yearOfDeath - a.yearOfBirth;
      const bAge = b.yearOfDeath - b.yearOfBirth;
      return aAge - bAge;
    });
    return sortedAges[sortedAges.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
