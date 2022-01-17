const palindromes = function (str) {  
    let originalArr = []; //array for string that will remain unchanged
    let arr = []; //array to hold string characters for us to mutate
    let reversedArray= []; //array to hold reversed original array    
    

    //loop through string and push characters to array excluding spaces and punctuation
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '!' || str[i] === '.' || 
        str[i] === ' '|| str[i] === ',' ){
            continue;
        } else {
            arr.push(str[i]);
            originalArr.push(str[i]);  
        }          
    }      
        //loop through array that is holding the string elements, pop the last element
        //and push it to our reversedArray
        for (let i = 0; i < arr.length + i; i++) {
            const lastElement = arr.pop();
            reversedArray.push(lastElement);        
        }

        let reversedString = reversedArray.join('').toLowerCase();//variable to hold joined reversed array
        let joinedOriginalString = originalArr.join('').toLowerCase(); //variable to hold joined original array
        
        if(reversedString === joinedOriginalString){            
            return true;
        } else {           
            return false;
        }      
};

// Do not edit below this line
module.exports = palindromes;
