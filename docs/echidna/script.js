document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact form');
    const contactStatus = document.getElementById('contact-status');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        contactStatus.textContent = 'Der Nachrichtenversand ist noch nicht eingerichtet.';
        contactStatus.hidden = false;
    });
});
