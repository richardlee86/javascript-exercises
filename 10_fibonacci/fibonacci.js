const fibonacci = (num) => {
    let arr = [1, 1]; //array to hold fibonacci sequence
    let n = 1, n2 = n, nextRound; 

    //Don't allow negative numbers as parameters
    if (num < 0) {
        return 'OOPS';
    }
    //loop to populate an array with the fibonacci sequence
    for (let i = 1; i < 50; i++) {        
         nextRound = n + n2;
         n = n2;
         n2 = nextRound;
         arr.push(nextRound);
    }    
    //return specific position in the sequence    
    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
