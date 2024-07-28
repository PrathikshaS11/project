var getGuesser = function () {
    // Generate a secret number between 30 and 50
    var secret = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        return "Unlucky, try again.";
      }
    };
};
  
var guess = getGuesser();

// Example test
console.log(guess(35)); // Test with a number, should print either "Well done!" or "Unlucky, try again."
