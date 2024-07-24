var showPlayerName = function (playerName) {
    console.log("The player's name is " + playerName);
};

showPlayerName("Kandra");
showPlayerName("Dax");

// Further Adventures:

// 1) Updated function to include number of letters in the player's name
var showPlayerName = function (playerName) {
    console.log("The player's name is " + playerName);
    console.log("The name has " + playerName.length + " letters");
};

showPlayerName("Kandra");
showPlayerName("Dax");
