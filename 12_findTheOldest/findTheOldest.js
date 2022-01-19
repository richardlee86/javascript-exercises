const findTheOldest = function(array) {
    this.array = array;
    let oldestPerson = 0; //variable to hold age of oldest person
    let currentYear = new Date().getFullYear();

    //variable to loop through array of objects and push the age values to an array
    /*This variable loops through an array of objects, calculates the age of the 
    person, and pushes the value to a new array
    if the yearOfDeath property doesn't exist, the birth year is subtracted from the current year
    and pushed to the new array */
    let age = array.reduce((arr, array) => {        
        this.currentYear = currentYear;       
        if(array.yearOfDeath === undefined){
            arr.push(currentYear - array.yearOfBirth);
        } else {
            arr.push(Math.max(array.yearOfDeath - array.yearOfBirth));
        }       
        return arr;
    },[]);     
    
    //loop through our new array of ages and find the oldest person
    age.forEach(element => {
        if(oldestPerson < element) {
            oldestPerson = element;
        }        
    }); 

    //loop through array and compare ages to birthYears and deathYears
    //if deathYear is undefined and equal to oldestPerson return that person
    //if deathYear - birthYear equals our oldest person, return that person

    for (let i = 0; i < array.length; i++) {        
        if (array[i].yearOfDeath === undefined && 
            currentYear - array[i].yearOfBirth === oldestPerson) {
           return array[i];
        } else if (array[i].yearOfDeath - array[i].yearOfBirth === oldestPerson){
            return array[i]
        } else {
            continue
        }        
    }
};

// Do not edit below this line
module.exports = findTheOldest;
