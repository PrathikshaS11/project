var book1;
var book2;
var book3; // 1. Declare a third book

book1 = {
    title        : "The Hobbit",
    author       : "J. R. R. Tolkien",
    publishedYear: 1937  // 3. Add a new property
};

book2 = {
    title        : "Northern Lights",
    author       : "Philip Pullman",
    publishedYear: 1995  // 3. Add a new property
};

book3 = {
    title        : "Pride and Prejudice",
    author       : "Jane Austen",
    publishedYear: 1813  // 3. Add a new property
};

// 4. Update messages to include the new property
console.log(book1.title + " by " + book1.author + ", published in " + book1.publishedYear);
console.log(book2.title + " by " + book2.author + ", published in " + book2.publishedYear);
console.log(book3.title + " by " + book3.author + ", published in " + book3.publishedYear); // 2. Log the third book
