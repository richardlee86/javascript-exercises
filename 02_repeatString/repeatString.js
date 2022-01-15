const repeatString = function(string, num) {
    this.string = string; 
    this.num = num;
    let arr = [];
    let finalArr = [];    
    if(num < 0){
        return 'ERROR';
    } else if (string === ''){
        return '';
    }
    for (let i = 0; i < num; i++) {                
        arr.push(string);                   
    }
    finalArr = arr.join("");
    return finalArr.toString();
};

// Do not edit below this line
module.exports = repeatString;
