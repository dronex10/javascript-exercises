const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(nums) {
  return nums.reduce((total, num) => total + num, 0)
};

const multiply = function(nums) {
  return nums.reduce((total, num) => total*num, 1)
};

const power = function(num, exponent) {
  let sum = 1;
	for (let i = 0; i < exponent; i++) {
    sum *= num;
  }
  return sum;
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
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
