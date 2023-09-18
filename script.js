const element = document.getElementById('animated-element');

element.animate([
    { opacity: 0, transform: 'translateY(20px)' },
    { opacity: 1, transform: 'translateY(0)' }
], {
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease-in-out' // Easing function
});
