// Sales objects
var sale1 = { price: 140, taxRate: 15 };
var sale2 = { price: 40, taxRate: 10 };
var sale3 = { price: 120, taxRate: 20 };

// Calculate tax and total for each sale
sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;

// Add a fourth sale

