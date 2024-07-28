// Define the buildPlanet function
var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };

    return planet;
};

// Create an array of planets
var planets = [
    buildPlanet("Jupiter", 5, "Gas Giant"),
    buildPlanet("Neptune", 8, "Ice Giant"),
    buildPlanet("Mercury", 1, "Terrestrial"),
    buildPlanet("Saturn", 6, "Gas Giant"), // Add new planet
    buildPlanet("Venus", 2, "Terrestrial")  // Add new planet
];

// Display each planet with a visual separator
planets.forEach(function (planet, index) {
    planet.showPlanet();
    if (index < planets.length - 1) {
        console.log("---------------"); // Visual separator between planets
    }
});
