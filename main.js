// Navigation Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav__link');
// Show Menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
// Hide Menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
// Hide menu when clicking nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});
// Change Header Background on Scroll
function scrollHeader() {
  if (window.scrollY >= 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', scrollHeader);
// Stagger Animation for Hero Content
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-fade-in');
  
  animatedElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`;
  });
});