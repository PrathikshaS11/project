// Creating arrays

var scores;
var names;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky" ];

console.log(scores);
console.log(names);

// 1) Add an extra element to each array
scores.push(5); // Adding a score of 5
names.push("Juno"); // Adding a name "Juno"

console.log(scores); // Log updated scores array
console.log(names);  // Log updated names array

// 2) Declare a third variable, akaScores
var akaScores;

// 3) Assign the scores array to akaScores
akaScores = scores;

// 4) Log akaScores to the console
console.log(akaScores);
