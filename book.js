let slideIndex = {
    1: 0,  // Current slide index for collection 1
    2: 0,  // Current slide index for collection 2
    4: 0,  // Current slide index for collection 4
    3: 0   // Current slide index for collection 5
};

// Function to move slides manually
function moveSlide(n, collectionNumber) {
    // Get all slides for the specified collection
    const collectionClass = `.collection${collectionNumber} .smallslide${collectionNumber}`;
    const slides = document.querySelectorAll(collectionClass);

    // Update the slide index for the current collection
    slideIndex[collectionNumber] += n;

    // Ensure the slide index stays within the bounds
    if (slideIndex[collectionNumber] >= slides.length) {
        slideIndex[collectionNumber] = 0; // Loop back to the first slide
    } else if (slideIndex[collectionNumber] < 0) {
        slideIndex[collectionNumber] = slides.length - 1; // Loop back to the last slide
    }

    // Hide all slides for the current collection
    slides.forEach(slide => slide.style.display = 'none');

    // Show the current slide for the current collection
    slides[slideIndex[collectionNumber]].style.display = 'block';
}

// Initially display the first slide in each collection
document.addEventListener('DOMContentLoaded', () => {
    // Initialize slides for each collection
    [1, 2, 4, 3].forEach(collectionNumber => {
        document.querySelectorAll(`.collection${collectionNumber} .smallslide${collectionNumber}`).forEach((slide, index) => {
            slide.style.display = index === 0 ? 'block' : 'none'; // Show only the first slide initially
        });
    });
});
