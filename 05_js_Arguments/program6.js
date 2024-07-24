var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);

// Further Adventures:

// 1) Use the showSum function to add 56 and 74.
showSum(56, 74);

// 2) Create a showProduct function to multiply two numbers.
var showProduct = function (number1, number2) {
  var product = number1 * number2;
  console.log("The product is " + product);
};

// Testing the showProduct function
showProduct(5, 10);   // Output: The product is 50
showProduct(-3, 7);   // Output: The product is -21
showProduct(2.5, 4);  // Output: The product is 10

// 3) Use your function to multiply three pairs of numbers.

// Testing the showProduct function with additional calls
showProduct(2, 3);     // Output: The product is 6
showProduct(0, 100);   // Output: The product is 0
showProduct(-5, -2);   // Output: The product is 10

// 4) Define showDifference and showQuotient functions for subtraction and division.

var showDifference = function (number1, number2) {
  var difference = number1 - number2;
  console.log("The difference is " + difference);
};

var showQuotient = function (number1, number2) {
  var quotient = number1 / number2;
  console.log("The quotient is " + quotient);
};

// Testing the showDifference and showQuotient functions
showDifference(15, 7);   // Output: The difference is 8
showQuotient(20, 4);     // Output: The quotient is 5
