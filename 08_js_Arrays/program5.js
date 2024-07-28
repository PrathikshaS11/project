// Updated getVisitorReport function to include Saturday and Sunday
var getVisitorReport = function (visitorArray, dayInWeek) {
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    var index = dayInWeek - 1;
    var visitorReport;

    // Ensure index is within range
    if (index < 0 || index >= days.length) {
        return "Invalid day";
    }

    visitorReport = "There were ";
    visitorReport += visitorArray[index];
    visitorReport += " visitors ";
    visitorReport += "on " + days[index];

    return visitorReport;
};

// Define visitors for each day of the week
var visitors = [354, 132, 210, 221, 481, 300, 150];

// Get the report for Friday (day 5)
var report = getVisitorReport(visitors, 5);
console.log(report); // Should display "There were 481 visitors on Friday"

// 3) New function to handle a month of visitor information
var getMonthlyVisitorReport = function (monthArray, week, day) {
    if (week < 1 || week > monthArray.length) {
        return "Invalid week";
    }
    if (day < 1 || day > 7) {
        return "Invalid day";
    }

    var weekArray = monthArray[week - 1]; // Get the correct week
    return getVisitorReport(weekArray, day);
};

// 4) Create week arrays and a month array
var week1 = [354, 132, 210, 221, 481, 300, 150];
var week2 = [400, 200, 250, 300, 500, 350, 175];
var week3 = [375, 180, 230, 280, 460, 320, 160];
var week4 = [390, 190, 240, 290, 470, 330, 165];
var month = [week1, week2, week3, week4];

// Test the function for different weeks and days
console.log(getMonthlyVisitorReport(month, 1, 5)); // Report for Friday of week 1
console.log(getMonthlyVisitorReport(month, 2, 7)); // Report for Sunday of week 2
console.log(getMonthlyVisitorReport(month, 3, 3)); // Report for Wednesday of week 3
console.log(getMonthlyVisitorReport(month, 4, 1)); // Report for Monday of week 4
