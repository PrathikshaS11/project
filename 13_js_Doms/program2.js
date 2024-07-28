// Function to change the color of the year every second
const yearElement = document.getElementById('year');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1'];

function changeYearColor() {
  let colorIndex = 0;
  setInterval(() => {
    yearElement.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 1000);
}

// Function to change the background color of the date and time every second
const datetimeElement = document.getElementById('datetime');

function updateDateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();
  datetimeElement.textContent = `${formattedDate} ${formattedTime}`;
}

function changeDateTimeBackground() {
  const colors = ['#FFFFE0', '#E0FFFF', '#E0FFE0', '#FFE0E0'];
  let colorIndex = 0;
  setInterval(() => {
    datetimeElement.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 1000);
}

// Function to set challenge background colors
function setChallengeBackgroundColors() {
  const completedChallenges = document.querySelectorAll('.completed');
  const ongoingChallenges = document.querySelectorAll('.ongoing');
  const comingChallenges = document.querySelectorAll('.coming');

  completedChallenges.forEach(li => {
    li.style.backgroundColor = 'green';
  });

  ongoingChallenges.forEach(li => {
    li.style.backgroundColor = 'yellow';
  });

  comingChallenges.forEach(li => {
    li.style.backgroundColor = 'red';
  });
}

// Initialize functions
changeYearColor();
changeDateTimeBackground();
setChallengeBackgroundColors();
updateDateTime();
setInterval(updateDateTime, 1000); // Update date and time every second
