
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');
    const reservationForm = document.querySelector('#reservation-form');

    function handleFormSubmit(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm(form)) {
                // In a real application, you would send the data to a server.
                // For this static site, we just show a success message.
                showStatusMessage(form, 'Your message has been sent successfully!', 'success');
                form.reset();
            } else {
                showStatusMessage(form, 'Please correct the errors and try again.', 'error');
            }
        });
    }

    function validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            const errorContainer = field.nextElementSibling;
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                if (errorContainer) {
                    errorContainer.textContent = `${field.previousElementSibling.textContent} is required.`;
                }
            } else {
                field.classList.remove('error');
                if (errorContainer) {
                    errorContainer.textContent = '';
                }
            }
        });

        return isValid;
    }

    function showStatusMessage(form, message, type) {
        const statusContainer = form.querySelector('.form-status');
        if (statusContainer) {
            statusContainer.textContent = message;
            statusContainer.className = `form-status ${type}`;
        }
    }

    if (contactForm) {
        handleFormSubmit(contactForm);
    }

    if (reservationForm) {
        handleFormSubmit(reservationForm);
    }
});
