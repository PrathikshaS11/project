var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(msg);
};

showMessage();

var message2 = "Hello Universe!";

showMessage = function () {
	console.log(msg);
	console.log(message2);
};

showMessage();

showMessage = function () {
	console.log(msg + ' ' + message2);
};

showMessage();
