// Combining functions:
var message = getMessage();
console.log(message);

var helloMessage = getHelloTo("Samwise");
console.log(helloMessage);

// Nesting function calls:
var total = sum(10, totalCost(30, 40, 2));
console.log(total);
// Output: 110 (assuming sum of 10 and total cost of 30 callOutCharge, 40 costPerHour, and 2 numberOfHours)
