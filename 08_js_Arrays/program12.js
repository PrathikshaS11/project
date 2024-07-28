// Function to display a question and its answers
var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(function (answer, i) {
        console.log(options[i] + " - " + answer);
    });
};

// Existing question object
var question1 = {
    question : "What is the capital of France?",
    answers : [
        "Bordeaux",
        "F",
        "Paris",
        "Brussels"
    ],
    correctAnswer : "Paris"
};

// New question objects
var question2 = {
    question : "Which planet is known as the Red Planet?",
    answers : [
        "Earth",
        "Mars",
        "Jupiter",
        "Venus"
    ],
    correctAnswer : "Mars"
};

var question3 = {
    question : "What is the largest ocean on Earth?",
    answers : [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean"
    ],
    correctAnswer : "Pacific Ocean"
};

// Array of questions
var questions = [question1, question2, question3];

// Use forEach to display each question
questions.forEach(displayQuestion);
