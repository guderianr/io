// script.js

// Get all tab buttons and tab content
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listeners to tab buttons
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Hide all tab content
    tabContents.forEach(content => {
      content.classList.remove('active');
    });

    // Show the clicked tab content
    tabContents[index].classList.add('active');
  });
});
