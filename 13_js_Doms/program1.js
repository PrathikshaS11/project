// Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p'); // or document.querySelector('p')
console.log(firstParagraph.textContent); // Output: First Paragraph

// 2. Get each of the paragraph using document.querySelector('#id') and by their id
const firstParagraphById = document.querySelector('#para1');
const secondParagraphById = document.querySelector('#para2');
const thirdParagraphById = document.querySelector('#para3');
const fourthParagraphById = document.querySelector('#para4');

console.log(firstParagraphById.textContent); // Output: First Paragraph
console.log(secondParagraphById.textContent); // Output: Second Paragraph
console.log(thirdParagraphById.textContent); // Output: Third Paragraph
console.log(fourthParagraphById.textContent); // Output: Fourth Paragraph

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs); // Output: NodeList of all <p> elements

// 4. Loop through the nodeList and get the text content of each paragraph
allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

// 5. Set a text content to the fourth paragraph
fourthParagraphById.textContent = 'Updated Fourth Paragraph';
console.log(fourthParagraphById.textContent); // Output: Updated Fourth Paragraph

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
allParagraphs.forEach((paragraph, index) => {
    paragraph.setAttribute('id', `para${index + 1}`);
    paragraph.classList.add('highlight');
});

// Level 2

// 1. Change style of each paragraph using JavaScript
allParagraphs.forEach(paragraph => {
    paragraph.style.color = 'blue';
    paragraph.style.backgroundColor = 'lightgray';
    paragraph.style.border = '1px solid black';
    paragraph.style.fontSize = '16px';
    paragraph.style.fontFamily = 'Arial, sans-serif';
});

// 2. Select all paragraphs and loop through each element and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
allParagraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) {
        paragraph.style.color = 'green'; // 0-based index, so 0 and 2 are first and third
    } else {
        paragraph.style.color = 'red'; // 1 and 3 are second and fourth
    }
});

// 3. Set text content, id, and class to each paragraph
allParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Paragraph ${index + 1}`;
    paragraph.setAttribute('id', `newPara${index + 1}`);
    paragraph.className = `paraClass${index + 1}`;
});
