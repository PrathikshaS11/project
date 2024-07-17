// Updating the sayHello function

var sayHello;

sayHello = function () {
    console.log("Hello\nWorld!");
};

// Call the sayHello function three times
sayHello();
sayHello();
sayHello();

// New function to print "Hello World!" letter by letter

var printLetters;

printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

// Call the printLetters function
printLetters();
