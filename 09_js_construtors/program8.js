// Define the CalendarEvent constructor function
var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        // Format the output
        var dateString = [
            this.startDate,
            " - (",
            this.startTime,
            " - ",
            this.endTime,
            ")"
        ].join("");
      
        console.log(this.title + ": " + dateString);
    };
};

// Create the first event
var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

// Show the first event
calEvent1.showEvent();

// Create the second event
var calEvent2 = new CalendarEvent(
    "Project Deadline",
    "4/15/16",
    "10.00am",
    "11.00am"
);

// Show the second event
calEvent2.showEvent();
