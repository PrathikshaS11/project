// Define the QuizQuestion constructor function
var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

// Create the first question
var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

// Add options to the first question
question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Lyon"); // Add a fifth option

// Show the first question
question1.showQuestion();

// Create the second question
var question2 = new QuizQuestion(
    "What is the largest planet in our solar system?",
    "Jupiter"
);

// Add options to the second question
question2.addOption("Earth");
question2.addOption("Mars");
question2.addOption("Jupiter");
question2.addOption("Saturn");
question2.addOption("Neptune");

// Show the second question
question2.showQuestion();

// Create the third question
var question3 = new QuizQuestion(
    "Which element has the chemical symbol 'O'?",
    "Oxygen"
);

// Add options to the third question
question3.addOption("Gold");
question3.addOption("Oxygen");
question3.addOption("Silver");
question3.addOption("Iron");
question3.addOption("Osmium");

// Show the third question
question3.showQuestion();
