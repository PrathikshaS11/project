var emptyBox = function (boxWidth) {
    boxWidth = Math.max(0, boxWidth);
    boxWidth = Math.min(40, boxWidth);

    var topBottomLine = "=" + "=".repeat(boxWidth - 2) + "=";
    var middleLine = "=" + spaces(boxWidth - 2) + "=";

    console.log(topBottomLine);
    for (var i = 0; i < 3; i++) {
        console.log(middleLine);
    }
    console.log(topBottomLine);
};

// Testing emptyBox function
emptyBox(12);
