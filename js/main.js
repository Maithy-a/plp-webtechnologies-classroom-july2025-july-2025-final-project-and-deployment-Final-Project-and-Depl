
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('#navigation');

    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navigation.classList.toggle('active');
        });
    }

    // Simple carousel for the home page
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        // A simple implementation can be added here if needed
        // For now, it's a simple scrollable container
    }
});
