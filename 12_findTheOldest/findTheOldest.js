const getAge = (birth,death)=>{
    let currYear = new Date().getFullYear();
    currYear = death || currYear;
    return currYear-birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest,currPerson)=>{
        let oldestAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        let personAge = getAge(currPerson.yearOfBirth,currPerson.yearOfDeath);
        return oldestAge < personAge ? currPerson : oldest 
    })
};

// Do not edit below this line
module.exports = findTheOldest;
