var getGuesser = function () {
    var secret = 8;
  
    return function (userNumber) {
      if (userNumber === secret) {
        console.log("Well done!");
      } else {
        console.log("Unlucky, try again.");
      }
    };
};
  
var guess = getGuesser();

// Example tests
guess(8);  // Should log "Well done!" because 8 matches the secret number
guess(5);  // Should log "Unlucky, try again." because 5 does not match the secret number

// Testing in the console
// - getGuesser: Will display the definition of the getGuesser function
// - guess: Will display the inner function with access to the secret variable
// - secret: Will result in an error or undefined because it's not accessible globally
