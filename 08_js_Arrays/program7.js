// Initial array and function definition
var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

// Function to show item and its length
showInfo = function (itemToShow) {
    console.log(itemToShow + " (" + itemToShow.length + " letters)");
};

// Add a few extra items to the array
items.push("Machu Picchu"); // Using push
items[4] = "Eiffel Tower"; // Using square brackets
items.push("Great Wall of China"); // Using push

// Run the program to show all items
items.forEach(showInfo);

// 3) New function to find the total number of letters
var findTotalLetters = function (array) {
    var totalLetters = 0;
    array.forEach(function (item) {
        totalLetters += item.length;
    });
    return totalLetters;
};

// Log the total number of letters
console.log("Total number of letters: " + findTotalLetters(items));
