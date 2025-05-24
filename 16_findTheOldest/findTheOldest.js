const findTheOldest = function(people) {
        const currentYear = new Date().getFullYear();
        const age = people.map(person => (person.yearOfDeath || currentYear) - person.yearOfBirth);
        const highestAge = Math.max(...age);
        const highestAgeIndex = age.indexOf(highestAge);

return people [highestAgeIndex]; 
};

// Do not edit below this line
module.exports = findTheOldest;
