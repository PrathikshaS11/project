// Function to create a planet object
var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;
  
    return planet;
};

// Build the first planet
var planet1 = buildPlanet("Jupiter", 5, "Gas Giant");

console.log(planet1.name);      // Outputs: Jupiter
console.log(planet1.position);  // Outputs: 5
console.log(planet1.type);      // Outputs: Gas Giant

// Build the second planet
var planet2 = buildPlanet("Mars", 4, "Terrestrial");

// Log the name and type of the second planet
console.log(planet2.name);      // Outputs: Mars
console.log(planet2.type);      // Outputs: Terrestrial
