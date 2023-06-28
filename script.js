// Get the necessary elements from the HTML
let userInput = document.getElementById('userInput');
let countdownDisplay = document.getElementById('countDown');
let endTimeDisplay = document.getElementById('endTime');
let button = document.getElementById('button');

button.addEventListener('click', () => {
  let duration = parseInt(userInput.value); // Get the duration in minutes
  let endTime = new Date(); // Get the current time
  endTime.setMinutes(endTime.getMinutes() + duration); // Calculate the end time

  // Update the countdown display every second
  let countdownInterval = setInterval(() => {
    let currentTime = new Date(); // Get the current time
    let remainingTime = (endTime - currentTime) / 1000; // Calculate the remaining time in seconds

    if (remainingTime <= 0) {
      // Timer has ended
      clearInterval(countdownInterval);
      countdownDisplay.textContent = 'Countdown Ended';
      endTimeDisplay.textContent = '';
    } else {
      // Timer is still running
      let minutes = Math.floor(remainingTime / 60);
      let seconds = Math.floor(remainingTime % 60);
      countdownDisplay.textContent = `Remaining Time: ${minutes} minutes ${seconds} seconds`;
      endTimeDisplay.textContent = `End Time: ${endTime.toLocaleTimeString()}`;
    }
  }, 1000);
});

