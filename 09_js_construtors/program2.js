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

// Create the first planet
var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

// Call the showPlanet method on the first planet
planet1.showPlanet();

// Create the second planet
var planet2 = buildPlanet(
    "Mars",
    4,
    "Terrestrial"
);

// Call the showPlanet method on the second planet
planet2.showPlanet();
