// Initial array operations
var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

// Remove the last item
removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

// 1) Push another item onto the array
items.push("Machu Picchu");

// 2) Log the joined items
console.log(items.join(" and "));

// 3) Set one of the items using square brackets
items[2] = "The Taj Mahal";

// Log the updated array
console.log(items.join(" and "));

// 4) Push more than one item at a time
items.push("Eiffel Tower", "Great Wall of China");

// Log the updated array with multiple new items
console.log(items.join(" and "));
