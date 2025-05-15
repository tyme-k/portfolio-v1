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
  

  const socialElements = document.querySelectorAll('.social-hidden'); // Social logos
  socialElements.forEach((el) => socialObserver.observe(el));


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
  

  const projHiddenElements = document.querySelectorAll('.proj-hidden'); // Corrected selector
  projHiddenElements.forEach((el) => projObserver.observe(el));


setTimeout(() => {
    const typewriter = document.getElementById('typewriter');
    typewriter.classList.add('cursor-disappear'); // Add class to hide cursor
  }, 4300); // Adjust timeout to match `typing` animation duration


  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, {
    threshold: [0.1], // Trigger detection when 10% of the section is visible
    rootMargin: '0px 0px -10px 0px', // Extend detection to avoid dead zones
  });
  

  sections.forEach((section) => navObserver.observe(section));
  
  window.addEventListener('scroll', () => {
    let currentSection = '';
    let closestDistance = Infinity;
  
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;
    const viewportCenter = viewportTop + window.innerHeight / 2;
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
  
      // Check if the section is at least partially visible in the viewport
      if (sectionBottom > viewportTop && sectionTop < viewportBottom) {
        const sectionMid = (sectionTop + sectionBottom) / 2;
  
        // Calculate the distance from the viewport center to the section's midpoint
        const distance = Math.abs(viewportCenter - sectionMid);
  
        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = section.id;
        }
      }
    });
  
    // Update navbar links
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  

// Light and Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
const lightModeIcon = document.getElementById('light-mode-icon');

// Check saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark', savedTheme === 'dark');
updateIcons(savedTheme);


function updateIcons(theme) {
  if (theme === 'dark') {
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'inline';
  } else {
    darkModeIcon.style.display = 'inline';
    lightModeIcon.style.display = 'none';
  }
}

themeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark');
  const newTheme = isDarkMode ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme); // Save theme preference
  updateIcons(newTheme);
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show-menu');
});