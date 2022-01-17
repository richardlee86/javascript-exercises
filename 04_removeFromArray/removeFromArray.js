const removeFromArray = function(arr=[], ...args) {
    this.arr = arr; 
    this.args = args;      
    let newArgs = Array.from(args); //array to hold unknown parameters

    /*create a new array to hold the remaining elements after removing the
    elements specified by the arguments*/

    /*Filter calls the callback function on each element of the array
    provided to it and creates a new array containing elements that the
    function evaluates as true*/
    const newArray = arr.filter(function(i){        
        return !newArgs.includes(i); //if an element is not present in newArgs it's added        
    });
    
    //return the new array that doesn't include those removed
    return newArray;    
};

// Do not edit below this line
module.exports = removeFromArray;
