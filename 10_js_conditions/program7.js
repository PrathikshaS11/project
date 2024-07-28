var getQuiz = function () {
    var score = 0,
        qIndex = 0,
        inPlay = true,
        questions,
        next,
        getQuestion,
        checkAnswer,
        submit,
        getHint;
      
    questions = [
      {
        question: "What is the highest mountain in the world?",
        answer: "Everest",
        hint: "It's the tallest peak on Earth."
      },
      {
        question: "What is the highest mountain in Scotland?",
        answer: "Ben Nevis",
        hint: "It's the tallest peak in the UK."
      }
    ];
    
    next = function () {
      qIndex = qIndex + 1;
      
      if (qIndex >= questions.length) {
        inPlay = false;
        console.log("You have finished the quiz.");
      }
    };
    
    getQuestion = function () {
      if (inPlay) {
        return questions[qIndex].question;
      } else {
        return "You have finished the quiz.";
      }
    };
    
    checkAnswer = function (userAnswer) {
      if (userAnswer === questions[qIndex].answer) {
        console.log("Correct!");
        score = score + 1;
      } else {
        console.log("No, the answer is " + questions[qIndex].answer);
      }
    };
    
    getHint = function () {
      if (inPlay) {
        return questions[qIndex].hint;
      } else {
        return "You have finished the quiz.";
      }
    };
    
    submit = function (userAnswer) {
      var message = "You have finished the quiz.";
      
      if (inPlay) {
        checkAnswer(userAnswer);
        next();
        message = "Your score is " + score + " out of " + questions.length;
      }
        
      return message;
    };
    
    return {
      quizMe: getQuestion,
      submit: submit,
      helpMe: getHint
    };
  };
  
var quiz = getQuiz();

/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Take the quiz, using the quiz.quizMe and
 *    quiz.submit methods.
 *    
 *    > quiz.quizMe()
 *      What is the highest mountain in the world?
 *    > quiz.submit("K2")
 *
 * 3) Use the helpMe method to get hints.
 *    
 *    > quiz.helpMe()
 *      It's the tallest peak on Earth.
 *    > quiz.submit("Everest")
 *    > quiz.quizMe()
 *      What is the highest mountain in Scotland?
 *    > quiz.helpMe()
 *      It's the tallest peak in the UK.
 *    > quiz.submit("Ben Nevis")
 *
 * 4) Add some more questions and answers, run the
 *    program and take the quiz again.
 *
 * CHALLENGE:
 * 
 * 5) Implement functionality to track and provide feedback
 *    on the percentage of correct answers.
 */

