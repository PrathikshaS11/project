var showMessage;

showMessage = function (message) {
	console.log("The message is:\n" + message);
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");

// Further Adventures:

// 1) Change the showMessage function to display its prefixed text on a separate line to the message
// Updated function definition
showMessage = function (message) {
	console.log("The message is:\n" + message);
};

// Reuse the function with the new definition
showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");

// 2) Declare a myMessage variable and assign it a string value
var myMessage = "This is my custom message!";

// 3) Call the showMessage function with myMessage as the argument
showMessage(myMessage);
