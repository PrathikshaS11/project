// First player
var player1 = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: ["a rusty key", "The Sword of Destiny", "a piece of cheese"]
};

// Log details of the first player
console.log(player1.name);
console.log(player1.name + " is in " + player1.place);
console.log(player1.name + " has health " + player1.health);
console.log("Items: " + player1.items.join(", ")); // Using join to format array

// Second player
var player2 = {
    name: "Arin",
    health: 75,
    place: "The Enchanted Forest",
    items: ["a magical staff", "a healing potion"]
};

// Log details of the second player
console.log(player2.name);
console.log(player2.name + " is in " + player2.place);
console.log(player2.name + " has health " + player2.health);
console.log("Items: " + player2.items.join(", ")); // Using join to format array
