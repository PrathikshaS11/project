// The secret number
var secret = 8;

// Function to check the user's guess
var guess = function (userNumber) {
  if (userNumber !== secret) {
    console.log("Try again!");
  } else {
    console.log("Well done!");
  }
};

// Example calls to test the function
guess(2);  // Should log "Try again!" because 2 is not equal to 8
guess(8);  // Should log "Well done!" because 8 is equal to the secret number
guess(10); // Should log "Try again!" because 10 is not equal to 8
