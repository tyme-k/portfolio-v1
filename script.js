// Create IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } 
      else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  // Select elements with the class "hidden"
  const hiddenElements = document.querySelectorAll('.hidden'); // Corrected selector
  hiddenElements.forEach((el) => observer.observe(el));

  const socialObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('social-show');
      } else {
        entry.target.classList.remove('social-show');
      }
    });
  });
  
  // Select elements for social-hidden class
  const socialElements = document.querySelectorAll('.social-hidden'); // Social logos
  socialElements.forEach((el) => socialObserver.observe(el));


// Create IntersectionObserver
const projObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('proj-show');
      } 
      else {
        entry.target.classList.remove('proj-show');
      }
    });
  });
  
  // Select elements with the class "hidden"
  const projHiddenElements = document.querySelectorAll('.proj-hidden'); // Corrected selector
  projHiddenElements.forEach((el) => projObserver.observe(el));

// Wait for the typing animation to finish (2 seconds in this case) and then stops the animation
setTimeout(() => {
    const typewriter = document.getElementById('typewriter');
    typewriter.classList.add('cursor-disappear'); // Add class to hide cursor
  }, 4300); // Adjust timeout to match `typing` animation duration


// Select all nav links and sections
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Create an IntersectionObserver
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove('active'));

      // Add active class to the link pointing to the current section
      const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, {
  threshold: 0.5, // Adjust threshold to suit your sections
});

// Observe each section
sections.forEach((section) => navObserver.observe(section));

// Handle active link when scrolling manually (fallback for edge cases)
window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - sectionHeight * 0.5 && window.scrollY < sectionTop + sectionHeight * 0.5) {
      currentSection = section.id;
    }
  });

  // Update active link based on the current section
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// Light and Dark Mode
// Select the toggle button and icons
const themeToggle = document.getElementById('theme-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
const lightModeIcon = document.getElementById('light-mode-icon');

// Check saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark', savedTheme === 'dark');
updateIcons(savedTheme);

// Update icons based on theme
function updateIcons(theme) {
  if (theme === 'dark') {
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'inline';
  } else {
    darkModeIcon.style.display = 'inline';
    lightModeIcon.style.display = 'none';
  }
}

// Add event listener to toggle theme
themeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark');
  const newTheme = isDarkMode ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme); // Save theme preference
  updateIcons(newTheme);
});

