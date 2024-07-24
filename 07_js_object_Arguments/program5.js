var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);

    console.log(smallest + " is the smallest among " + num1 + ", " + num2 + ", and " + num3);
};

showSmallest(10, 5, 8);   // Output: 5 is the smallest among 10, 5, and 8
showSmallest(-2, -5, -10); // Output: -10 is the smallest among -2, -5, and -10
