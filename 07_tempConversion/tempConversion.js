const ftoc = function(num) {
  return Math.ceil((((num - 32) * 5) / 9 ) * 10) / 10;
};

const ctof = function(num) {
  return Math.ceil((num * (9/5) + 32) * 10) / 10;
};



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
