const sumAll = function(valueOne, valueTwo) {
    let higherValue;
    if (valueOne < 0 ||
	valueTwo < 0 ||
        !Number.isInteger(valueOne) ||
        !Number.isInteger(valueTwo)) {
	return 'ERROR';
    } else if (valueOne === valueTwo) {
	return valueOne;
    } else if (valueOne > valueTwo) {
	higherValue = valueOne;
    } else {
	higherValue = valueTwo;
    }
    return (higherValue*(higherValue+1)/2);
};

// Do not edit below this line
module.exports = sumAll;
