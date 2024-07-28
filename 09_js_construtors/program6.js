// Define the Planet constructor function
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons(); // Use showMoons instead of join
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon); // Add new moons to the start of the array
    };
  
    this.showMoons = function () {
        if (this.moons.length === 0) {
            console.log("Moons: None.");
        } else {
            console.log("Moons:");
            this.moons.forEach(function (moon, index) {
                console.log(index + ": " + moon);
            });
        }
    };
  
    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return "Moon not found.";
        }
    };
};

// Create planets and add moons
var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.addMoon("Ganymede"); // Adding a new moon

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");
planet2.addMoon("Nereid"); // Adding a new moon

var planet3 = new Planet("Mercury", 1, "Terrestrial");
planet3.addMoon("None"); // Mercury has no natural moons

// Display planets and their moons
[planet1, planet2, planet3].forEach(function (planet) {
    planet.showPlanet();
    console.log(""); // Add a blank line for separation
});

// Example usage of getMoon
console.log("Example usage of getMoon:");
console.log("> planet1.getMoon(1): " + planet1.getMoon(1)); // Europa
console.log("> planet2.getMoon(3): " + planet2.getMoon(3)); // Moon not found
