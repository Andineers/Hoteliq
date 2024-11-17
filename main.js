// Navigation Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const header = document.querySelector('.header');

// Show/Hide Menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Change Header Background on Scroll
function scrollHeader() {
  if (window.scrollY >= 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', scrollHeader);

// Booking Form Handling
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const guests = document.getElementById('guests').value;
    
    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    
    if (checkInDate < today) {
      alert('Check-in date cannot be in the past');
      return;
    }
    
    if (checkOutDate <= checkInDate) {
      alert('Check-out date must be after check-in date');
      return;
    }
    
    // Calculate total nights
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
    // You would typically send this data to a server
    // For now, we'll just show an alert
    alert(`Booking request received!
    Check-in: ${checkIn}
    Check-out: ${checkOut}
    Guests: ${guests}
    Total nights: ${nights}`);
  });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // You would typically send this to a server
    // For now, we'll just show an alert
    alert(`Thank you for subscribing with: ${email}`);
    e.target.reset();
  });
}

// Initialize minimum dates for booking form
const checkInInput = document.getElementById('checkIn');
const checkOutInput = document.getElementById('checkOut');

if (checkInInput && checkOutInput) {
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  checkInInput.min = today;
  
  // Update checkout minimum date when checkin changes
  checkInInput.addEventListener('change', (e) => {
    checkOutInput.min = e.target.value;
  });
}

// Feature Cards Animation
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});