// Basic JavaScript for Static Website
// You can expand features as needed

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple button click alert
const contactBtn = document.querySelector('.btn');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        alert('Thank you for your interest! We will contact you soon.');
    });
}

// Change header color on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#003f96';
    } else {
        header.style.background = '#0d6efd';
    }
});