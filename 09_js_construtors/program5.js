// Define the Planet constructor function
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
        console.log("Moons: " + (this.moons.length > 0 ? this.moons.join(', ') : "None") + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };
  
    this.removeMoon = function () {
        this.moons.pop(); // Remove the last moon from the array
    };
};

// Create the first planet
var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.showPlanet();

// Create the second planet
var planet2 = new Planet("Saturn", 6, "Gas Giant");
planet2.addMoon("Titan");
planet2.addMoon("Rhea");
planet2.addMoon("Enceladus");
planet2.showPlanet();

// Remove the last moon from the second planet and show the updated list
planet2.removeMoon();
planet2.showPlanet();
