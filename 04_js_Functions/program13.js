// Define player objects
var player1;
var player2;
var player;
var showPlayerInfo;
var showPlayerLocation;
var showPlayerHealth;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

// Function to display the player's location
showPlayerLocation = function () {
    console.log(player.name + " is in " + player.place);
};

// Function to display the player's health
showPlayerHealth = function () {
    console.log(player.name + " has health " + player.health);
};

// Function to display full player information
showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerLocation(); // Call function to show location
    showPlayerHealth();   // Call function to show health
    console.log("------------------------------");
    console.log("");
};

// Display information for player1
player = player1;
showPlayerInfo();

// Display information for player2
player = player2;
showPlayerInfo();
