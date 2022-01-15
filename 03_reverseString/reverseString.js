const reverseString = function(str) {
    this.str = str;
    let arr = []; //array to hold original string    
    let reversedArr = [] //array to hold joined reversed string
    

    for (let i = 0; i < str.length; i++) {       
        let arrVariable = str.charAt(i);
        arr.unshift(arrVariable);
    }
    reversedArr = arr.join('');
    return reversedArr; 
};

// Do not edit below this line
module.exports = reverseString;
