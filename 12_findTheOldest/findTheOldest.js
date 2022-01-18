const findTheOldest = function(array) {
    this.array = array;
    let oldestPerson = 0; //variable to hold age of oldest person

    //variable to loop through array of objects and push the age values to an array
    let age = array.reduce((arr, array) => {        
        arr.push(Math.max(array.yearOfDeath - array.yearOfBirth));
        return arr;
    },[]);     
    
    //loop through our new array of ages and find the oldest person
    age.forEach(element => {
        if(oldestPerson < element) {
            oldestPerson = element;
        }        
    }); 

    //loop through array and compare ages to birthYears and deathYears
    //if deathYear is null return that person.name
    //if deathYear - birthYear equals our oldest person, return array.name

    for (let i = 0; i < array.length; i++) {
        if ('yearOfDeath' in array[i] === false) {
            return array[i].name; 
        } else if(array[i].yearOfDeath - array[i].yearOfBirth === oldestPerson){
            return array[i].name; 
        }else {
            continue;
        }
        
    }
};

// Do not edit below this line
module.exports = findTheOldest;
