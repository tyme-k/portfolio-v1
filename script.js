// script.js

// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");
const lightModeIcon = document.getElementById("light-mode-icon");

// Default to dark mode
document.body.classList.remove("light");
darkModeIcon.style.display = "none";
lightModeIcon.style.display = "inline";

// Add click event listener to toggle theme and icons
themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    // Switch to dark mode
    document.body.classList.remove("light");
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "inline";
  } else {
    // Switch to light mode
    document.body.classList.add("light");
    darkModeIcon.style.display = "inline";
    lightModeIcon.style.display = "none";
  }
});


// Wait for the typing animation to finish (2 seconds in this case) and then stops the animation
setTimeout(() => {
    const typewriter = document.getElementById('typewriter');
    typewriter.classList.add('cursor-disappear'); // Add class to hide cursor
  }, 4300); // Adjust timeout to match `typing` animation duration
  
