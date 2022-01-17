const sumAll = function(num1, num2) {
    let finalSum; //create a variable to hold final sum
    let arr = []; //create array to push numbers to
    let count = num1;
    const numAdder = (firstNum, currentNum) => firstNum + currentNum;

    if(num1 < num2 && num1 > 0 && typeof num1 === 'number'
    && typeof num2 === 'number'){
        while (count <= num2) {
            arr.push(count);
            count++;
        }
    } else if (num1 > num2 && num1 > 0 && typeof num1 === 'number'
    && typeof num2 === 'number') {
        while (count >= num2) {
            arr.push(count);
            count--;
        }
    } else if(num1 < 0 || num2 < 0){
        return 'ERROR';
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'ERROR';
    }
    
    return arr.reduce(numAdder);

};

// Do not edit below this line
module.exports = sumAll;
