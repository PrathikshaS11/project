// Function to update the display with the key and its code
function updateDisplay(event) {
    const keyElement = document.getElementById('key');
    const codeElement = document.getElementById('code');
    
    keyElement.textContent = `You pressed: ${event.key}`;
    codeElement.textContent = event.code;
  }
  
  // Add an event listener for 'keydown' events
  document.addEventListener('keydown', updateDisplay);
  