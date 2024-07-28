// Define the Player constructor function with a method to drop the last item
var Player = function (name, health) {
    var newLine = spacer.newLine();

    this.name = name;
    this.health = health;
    this.items = [];
    this.place = null;

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.getNameInfo = function () {
        return this.name;
    };

    this.getHealthInfo = function () {
        return this.name + " has health " + this.health;
    };

    this.getPlaceInfo = function () {
        return this.name + " is in " + (this.place ? this.place.title : "no place");
    };

    this.getItemsInfo = function () {
        var itemsString = "Items:" + newLine;

        this.items.forEach(function (item, i) {
            itemsString += "   - " + item + newLine;
        });

        return itemsString;
    };

    this.getInfo = function (character) {
        var place = this.getPlaceInfo();
        var health = this.getHealthInfo();
        var longest = Math.max(place.length, health.length) + 4;

        var info = spacer.box(this.getNameInfo(), longest, character);
        info += spacer.wrap(place, longest, character);
        info += spacer.newLine() + spacer.wrap(health, longest, character);
        info += newLine + spacer.line(longest, character);

        info += newLine;
        info += "  " + this.getItemsInfo();
        info += newLine;
        info += spacer.line(longest, character);
        info += newLine;

        return info;
    };

    this.showInfo = function (character) {
        console.log(this.getInfo(character));
    };

    // Method to drop the last item
    this.dropLastItem = function () {
        this.items.pop(); // Removes the last item from the array
    };
};

// Testing Player with additional methods and functionalities
var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

// Create two players
var player1 = new Player("Kandra", 50);
var player2 = new Player("Derek", 75);

// Assign places to players
player1.place = library;
player2.place = library;

// Add items for each player
player1.addItem("a rusty key");
player1.addItem("The Sword of Doom");

player2.addItem("a magical amulet");
player2.addItem("a healing potion");

// Display each player's info
console.log("Player 1 Info:");
player1.showInfo("=");

console.log("Player 2 Info:");
player2.showInfo("#");

// Test the dropLastItem method
player1.dropLastItem();
player2.dropLastItem();

// Display each player's info after dropping the last item
console.log("Player 1 Info After Dropping Last Item:");
player1.showInfo("=");

console.log("Player 2 Info After Dropping Last Item:");
player2.showInfo("#");
