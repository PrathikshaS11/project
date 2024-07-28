// Initial array and function definition
var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra" ];

// 1) Add two more names to the players array
players.push("Aiden"); // Adding a new player
players.push("Zara");  // Adding another new player

// 2) Run the program to display all players and their details
showArguments = function (item, index, wholeArray) {
  console.log("Item: " + item);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);

// 3) Update the first console.log to use wholeArray and index
showArguments = function (item, index, wholeArray) {
  console.log("Item: " + wholeArray[index]); // Using wholeArray and index to display the current item
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);
