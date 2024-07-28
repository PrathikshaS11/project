// The secret number
var secret = 8;

// Function to check the user's guess
var guess = function (userNumber) {
  if (userNumber > secret) {
    console.log("Too high!");
  } else if (userNumber === secret) {
    console.log("Well done!");
  } else {
    console.log("Try again!");
  }
};

// Example calls to test the function
guess(10); // Should log "Too high!"
guess(8);  // Should log "Well done!"
guess(5);  // Should log "Try again!"
