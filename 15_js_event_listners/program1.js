// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Function to generate numbers and apply styles
  function generateNumbers() {
    const container = document.getElementById('number-container');
    container.innerHTML = ''; // Clear existing content
  
    for (let i = 1; i <= 100; i++) {
      const numberDiv = document.createElement('div');
      numberDiv.className = 'number';
  
      if (isPrime(i)) {
        numberDiv.classList.add('prime');
      } else if (i % 2 === 0) {
        numberDiv.classList.add('even');
      } else {
        numberDiv.classList.add('odd');
      }
  
      numberDiv.textContent = i;
      container.appendChild(numberDiv);
    }
  }
  
  // Initialize the number generation
  generateNumbers();
  