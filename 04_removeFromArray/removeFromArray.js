const removeFromArray = function(inputArray, ...elemsToRemove) {
    let newArray = inputArray.filter((elem) => {
	return !elemsToRemove.includes(elem);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
