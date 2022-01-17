const removeFromArray = function(arr=[], ...args) {
    this.arr = arr; 
    this.args = args;      
    let newArgs = Array.from(args); //array to hold unknown parameters

    /*create a new array to hold the remaining elements after removing the
    elements specified by the arguments*/
    const newArray = arr.filter(function(i){        
        return !newArgs.includes(i);
    });
    
    //return the new array that doesn't include those removed
    return newArray;    
};

// Do not edit below this line
module.exports = removeFromArray;
