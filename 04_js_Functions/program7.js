// Declare and initialize variables
var number1 = 1000; // Initial value, can be changed
var number2 = 66;   // Initial value, can be changed
var number3 = 25;   // New variable added
var result;

// Define the function to add three numbers
var findTotal;

findTotal = function () {
    result = number1 + number2 + number3; // Update function to include number3
};

// Call the function to perform the calculation
findTotal();

// Log the result to the console
console.log(number1 + " + " + number2 + " + " + number3 + " = " + result);
