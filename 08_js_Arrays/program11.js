// 1) Add an extra item to the shopping trip
var costs = [1.99, 4.95, 2.50, 9.87, 3.75]; // Added an extra cost
var numOfEach = [2, 1, 5, 2, 3];           // Added the number for the extra item

// Original getTotalBill function
var getTotalBill = function (itemCosts, itemCounts) {
    var total = 0;

    itemCosts.forEach(function (cost, i) {
        total += cost * itemCounts[i];
    });

    return total;
};

console.log("The total cost is $" + getTotalBill(costs, numOfEach));

// 2) Change the function to iterate over itemCounts
var getTotalBillByCounts = function (itemCosts, itemCounts) {
    var total = 0;

    itemCounts.forEach(function (count, i) {
        total += itemCosts[i] * count;
    });

    return total;
};

console.log("The total cost is $" + getTotalBillByCounts(costs, numOfEach));

// 3) Create a single array of objects with cost and numberBought properties
var items = [
    { cost: 1.99, numberBought: 2 },
    { cost: 4.95, numberBought: 1 },
    { cost: 2.50, numberBought: 5 },
    { cost: 9.87, numberBought: 2 },
    { cost: 3.75, numberBought: 3 }
];

// 4) Update getTotalBill to accept a single array of items
var getTotalBillFromItems = function (items) {
    var total = 0;

    items.forEach(function (item) {
        total += item.cost * item.numberBought;
    });

    return total;
};

console.log("The total cost is $" + getTotalBillFromItems(items));
