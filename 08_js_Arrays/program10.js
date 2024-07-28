// 1) Create an array of rectangle objects
var rectangles = [
    { length: 5, width: 10 },
    { length: 7, width: 3 },
    { length: 12, width: 8 }
];

// 2) Define the assignArea function
var assignArea = function (rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
};

// 3) Define the showInfo function
var showInfo = function (rectangle) {
    console.log("Length: " + rectangle.length);
    console.log("Width: " + rectangle.width);
    console.log("Area: " + rectangle.area);
};

// 4) Use forEach to apply both functions
rectangles.forEach(function (rectangle) {
    assignArea(rectangle); // Assign the area property
});

rectangles.forEach(showInfo); // Display the information
