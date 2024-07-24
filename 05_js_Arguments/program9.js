var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + ": health " + playerHealth + ".");
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);

// Further Adventures:

// 2) Call the showPlayerHealth function using your own arguments.
showPlayerHealth("Alice", 60);
showPlayerHealth("Bob", 30);

// 3) Declare a variable called healthInfo inside the showPlayerHealth function.
// 4) Assign healthInfo the string that will be displayed.
// 5) Change the call to console.log so that it uses the healthInfo variable.
showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo;
    healthInfo = playerName + ": health " + playerHealth + ".";
    console.log(healthInfo);
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);
