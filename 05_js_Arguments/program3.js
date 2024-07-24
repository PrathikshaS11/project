var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

showMessage("It's full of stars!");

// Further Adventures:

// 1) Change the message in the parentheses when showMessage is called
showMessage("Hello, world!");

// 2) Add two more calls to the showMessage function with different arguments each time
showMessage("Goodbye, universe!");
showMessage("Coding is fun!");

// 3) Change the showMessage function itself to add some extra text after the message passed in
showMessage = function (message) {
	console.log("The message is: " + message + ". Isn't that amazing?");
};

showMessage("JavaScript is powerful!");
