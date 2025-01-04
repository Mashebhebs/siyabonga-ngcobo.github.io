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
