// Existing objects in an array

var place1 = { name: "The Pyramids", country: "Egypt" };
var place2 = { name: "The Grand Canyon", country: "USA" };
var place3 = { name: "Bondi Beach", country: "Australia" };

var thisYear = [ place1, place2 ];
var nextYear = [ place3 ];

console.log("Before adding:");
console.log("This Year:", thisYear);
console.log("Next Year:", nextYear);

// 1) Add place1 to the nextYear array
nextYear.push(place1);

console.log("After adding:");
console.log("This Year:", thisYear);
console.log("Next Year:", nextYear);

// 2) Check if an object can be in two arrays at once
// By logging the arrays, we can observe that place1 is indeed in both arrays.
