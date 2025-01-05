// Theme Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themeToggleButton.textContent = 'Light Theme';
    } else {
        themeToggleButton.textContent = 'Dark Theme';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;
    const formData = new FormData(form);

    // Show loading or disable the button if needed
    const feedbackDiv = document.getElementById('form-feedback');
    feedbackDiv.style.display = 'block';
    feedbackDiv.textContent = 'Sending your message...';

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json',
            }
        });

        if (response.ok) {
            // Handle successful submission
            feedbackDiv.textContent = 'Thank you! Your message has been sent.';
            feedbackDiv.style.color = 'green';
            form.reset(); // Clear the form fields
        } else {
            // Handle errors from Formspree
            feedbackDiv.textContent = 'Oops! Something went wrong. Please try again.';
            feedbackDiv.style.color = 'red';
        }
    } catch (error) {
        // Handle network or other unexpected errors
        feedbackDiv.textContent = 'Oops! Something went wrong. Please try again later.';
        feedbackDiv.style.color = 'red';
    }
});
