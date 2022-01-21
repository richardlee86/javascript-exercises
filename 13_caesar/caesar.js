const caesar = function(string, number) {  
    let result = ''; //hold the result of our loops to return later

    for (let i = 0; i < string.length; i++) {
        let characterCode = string[i].charCodeAt(); 

        if (characterCode > 96  && characterCode < 123) {
            characterCode += number % 26; //ensure the caesar function works with numbers greater than 26

            //if the number passes 'Z' reset to 'A'
            if(characterCode > 122 ){
                characterCode = (characterCode - 122) + 96;

                //make sure negative numbers don't matter
            } else if(characterCode < 97) {
                characterCode = (characterCode - 97) + 123;
            }
        }
        
        if(characterCode > 64 && characterCode < 91){
            characterCode += number % 26; 

            if(characterCode > 90){
               characterCode = (characterCode - 90) + 64;               
            } else if (characterCode < 65) {
                characterCode = (characterCode - 65) + 91;
            }
        }
        console.log(result);
        result += String.fromCharCode(characterCode);
    }    
    return result; 

};

// Do not edit below this line
module.exports = caesar;
