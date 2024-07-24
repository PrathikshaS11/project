var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

// Further Adventures:

// 1) Define a cube function
var cube = function (numberToCube) {
  var result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " cubed = " + result);
};

// Testing the cube function
cube(3);
cube(-1);
cube(5);
cube(0);

// 3) Define and test a squareRoot function
var squareRoot = function (number) {
  var sqrt = Math.sqrt(number);
  console.log("The square root of " + number + " is " + sqrt);
};

// Testing the squareRoot function
squareRoot(9);
squareRoot(16);
squareRoot(2);
