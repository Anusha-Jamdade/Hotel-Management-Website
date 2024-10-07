const slideContainer = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-image');

let currentSlide = 0;
const totalSlides = images.length;
const imagesPerView = 3;  // Number of images to show at a time

function updateSlidePosition() {
    // Adjust translation based on the number of images visible
    slideContainer.style.transform = `translateX(-${currentSlide * (100 / imagesPerView)}%)`;
}

function moveSlide(n) {
    currentSlide += n;

    // Loop the slides so that it wraps around
    if (currentSlide >= totalSlides - imagesPerView + 1) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - imagesPerView;
    }

    updateSlidePosition();
}

// Optional: Auto-slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);
