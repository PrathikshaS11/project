// Array of days and initial index
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

// Display the current day based on dayInWeek
console.log(days[dayInWeek]); // Display day at index 4
console.log(days[dayInWeek - 1]); // Display day at index 3

// 1) Change the value of the dayInWeek variable
dayInWeek = 2; // Change to display "Wednesday"

// Display the day at the new index
console.log(days[dayInWeek]); // Should display "Wednesday"

// 2) Write a function to get the day based on index
function getDay(index) {
    return days[index];
}

// 3) Call the function with 4 as the argument and log the value
console.log(getDay(4)); // Should display "Friday"
