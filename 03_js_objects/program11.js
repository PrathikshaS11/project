var player1;
var player2;

// Initialize player1
player1 = {
    name: "Max",
    score: 0
};

// Initialize player2
player2 = {
    name: "Alex",
    score: 0
};

// Update scores
player1.score = player1.score + 50;
player2.score = player2.score + 70; // Setting an initial score for player2

// Increase player1's score by 10%
player1.score = player1.score * 1.10; // 10% increase

// Log player1's score
console.log(player1.name + " has scored " + player1.score);

// Log player2's score
console.log(player2.name + " has scored " + player2.score);

// Calculate the total score
var totalScore = player1.score + player2.score;

// Log the sum of scores
console.log(player1.name + " and")
