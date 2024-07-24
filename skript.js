// script.js

import quantum from '../elements/quantum.js';

// Initialize the quantum loader
quantum.register();

// Wait for the window to load completely
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Hide the preloader and show the main content
    preloader.style.display = 'none';
    content.style.display = 'block';
});
