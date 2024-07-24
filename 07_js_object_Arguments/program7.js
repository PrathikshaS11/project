var getSmall = function (str) {
    return str.toLowerCase();
};

// Testing getSmall function
var country = "CANADA";
var smallCountry = getSmall(country);
console.log(country + " becomes " + smallCountry);  // Outputs: CANADA becomes canada
