var getGuesser = function (range, offset) {
    var secret = Math.floor(Math.random() * (range - offset + 1)) + offset;
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else if (userNumber > secret) {
        return "Too high!";
      } else {
        return "Too low!";
      }
    };
};

// Example usage
var guess = getGuesser(20, 10); // Secret number between 10 and 20
console.log(guess(12)); // Output will vary
console.log(guess(18)); // Output will vary
