const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum,currVal)=>sum+currVal,0);
};

const multiply = function(arr) {
  return arr.reduce((product,currVal)=>product*currVal);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	let product = 1;
  for (let i = 1; i<=num; i++){
    product *= i;
  }
  return product;
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
