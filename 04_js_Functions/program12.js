// Define sale objects
var sale1;
var sale2;
var sale3;
var sale4;
var processSale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 75, taxRate: 12 }; // New sale object

// Function to calculate tax and display sale information
processSale = function (sale) {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;

    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
    console.log("------------------------------");
};

// Process each sale
processSale(sale1);
processSale(sale2);
processSale(sale3);
processSale(sale4);
