// Initial array
var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

// 1) Display the number of places and the places themselves
console.log("Dream destinations:");
console.log("Total number of places to visit: " + items.length);

items.forEach(function (item, index) {
    console.log(" " + (index + 1) + ". " + item);
});

// 2) Wrap the display code in a function and assign to showItems
var showItems = function() {
    console.log("Dream destinations:");
    console.log("Total number of places to visit: " + items.length);
    
    items.forEach(function (item, index) {
        console.log(" " + (index + 1) + ". " + item);
    });
};

// Call showItems to display the current state
showItems();
