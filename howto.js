// script.js
let currentIndex = 0;
let totalItems = document.querySelectorAll('.carousel-item').length;
let interval = 3000; // Time between slides in milliseconds

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.indicator');

    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateY(${offset}%)`;

    indicators.forEach((indicator, idx) => {
        indicator.classList.toggle('active', idx === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function startCarousel() {
    setInterval(nextSlide, interval);
}

// Initialize the first slide and start the carousel
showSlide(currentIndex);
startCarousel();

// Light and dark mode switch functionality
const sunBtn = document.getElementById('sun-btn');
const moonBtn = document.getElementById('moon-btn');

sunBtn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
});

moonBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
});
