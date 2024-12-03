const reverseString = function(inputString) {
    let inputStringArray = inputString.split("");
    let newStringArray = [];
    for (i = inputStringArray.length-1; i >= 0; i--) {
	newStringArray.push(inputStringArray[i]);
    }
    return newStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
