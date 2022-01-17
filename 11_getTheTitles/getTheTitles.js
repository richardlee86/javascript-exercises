const getTheTitles = function(array) {
    let arr = [];
    array.forEach(element => {
        arr.push(element.title);
    });

    return arr; 

};

// Do not edit below this line
module.exports = getTheTitles;
