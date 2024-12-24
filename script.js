// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// Contact Form
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formMessage.textContent = 'Thank you for your message, ' + name + '! I will get back to you soon.';
        formMessage.style.color = 'green';
        contactForm.reset();
    } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
    }
});
