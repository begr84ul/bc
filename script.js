// JavaScript for mobile menu toggle
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
});
