// Define quiz question objects
var quizQuestion1;
var quizQuestion2;
var quizQuestion3;
var currentQuestion;
var displayQuestion;

// Initialize the quiz question objects
quizQuestion1 = {
    question: "What is the capital of France?",
    answer1: "Bordeaux",
    answer2: "Paris",
    answer3: "Brussels",
    answer4: "Madrid",
    correctAnswer: "Paris"
};

quizQuestion2 = {
    question: "Which planet is known as the Red Planet?",
    answer1: "Earth",
    answer2: "Mars",
    answer3: "Jupiter",
    answer4: "Saturn",
    correctAnswer: "Mars"
};

quizQuestion3 = {
    question: "What is the largest ocean on Earth?",
    answer1: "Atlantic Ocean",
    answer2: "Indian Ocean",
    answer3: "Arctic Ocean",
    answer4: "Pacific Ocean",
    correctAnswer: "Pacific Ocean"
};

// Define the function to display question and answer options
displayQuestion = function () {
    console.log("Question: " + currentQuestion.question);
    console.log("1. " + currentQuestion.answer1);
    console.log("2. " + currentQuestion.answer2);
    console.log("3. " + currentQuestion.answer3);
    console.log("4. " + currentQuestion.answer4);
    console.log("------------------------------");
};

// Display each quiz question
currentQuestion = quizQuestion1;
displayQuestion();

currentQuestion = quizQuestion2;
displayQuestion();

currentQuestion = quizQuestion3;
displayQuestion();
