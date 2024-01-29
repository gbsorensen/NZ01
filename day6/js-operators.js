let x = 5;
let y = 2;

// addition
let sum = x + y;
console.log("Sum: ", sum);

// subtraction
let difference = x - y;
console.log("Difference: ", difference);

// Multiply
let multiply = x * y;
console.log("Multiply: ", multiply);

// Divide
let divide = x / y;
console.log("Divide: ", divide);

// remainder - modulus
let remainder = x % y;
console.log("Remainder: ", remainder);

// String Concatenation
console.log("Hello" + "," + " " + "World");

// Logical Expressions
let sunny = true;
let cloudy = false;

// && - AND
console.log("sunny and cloudy", sunny && cloudy);

// || - OR
console.log("sunny or cloudy", sunny || cloudy);

//  ! - NOT
console.log("Cloudy", !cloudy);

// Assignment Expressions
let a = 10;
let b = 5;

// Addition Compound
// a = a + b
a += b;
console.log("Sum: ", a);

a -= b;
console.log("Difference: ", a);

// Multiply Compound
a *= b;
console.log("Multiply", a);

// Division Compound
a /= b;
console.log("Division", a);

// Function Call Expressions
// sum
function mySum(num1, num2) {
	console.log(num1 + num2);
}
mySum(30, 10);

// difference
function myDifference(num1, num2) {
	console.log(num1 - num2);
}
myDifference(30, 10);

// Product
function myProduct(num1, num2) {
	console.log(num1 - num2);
}
myProduct(30, 10);

// Quotient
function myQuotient(num1, num2) {
	console.log(num1 - num2);
}
myQuotient(30, 10);

// arrow function
const mySumArrow = (num1, num2) => {
	console.log("Arrow function sum: ", num1 + num2);
};
mySumArrow(20, 1);
