// Handle burger menu toggle
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show-menu');
  document.querySelector('.mobile-overlay').classList.toggle('show-overlay');
});

// Close side menu when overlay is clicked
document.querySelector('.mobile-overlay').addEventListener('click', () => {
  document.querySelector('nav').classList.remove('show-menu');
  document.querySelector('.mobile-overlay').classList.remove('show-overlay');
});

// Close side menu when a nav-link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
      document.querySelector('nav').classList.remove('show-menu');
      document.querySelector('.mobile-overlay').classList.remove('show-overlay');
  });
});