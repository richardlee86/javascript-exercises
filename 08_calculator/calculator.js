const add = function(num1, num2) {
	return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(array) {
  const numAdder = (firstNum, currentNum) => firstNum + currentNum;
  
  if (array.length > 1){
    return array.reduce(numAdder);
  } else if (array.length === 1) {
    return array[0];
  }	else {
    return 0;
  }
};

const multiply = function(array) {
  const numMultiplyer = (firstNum, currentNum) => firstNum * currentNum;
  return array.reduce(numMultiplyer);
};

const power = function(num, power) {
	return num ** power; 
};

const factorial = function(num) {
	if (num <= 0){
    return 1;
  } else if (num === 1) {
    return 1; 
  } else {
    return (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
