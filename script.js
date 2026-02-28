// Grab the elements from the HTML
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.gallery img');
const closeBtn = document.querySelector('.close-btn');

// 1. Open Lightbox when an image is clicked
images.forEach(img => {
    img.addEventListener('click', () => {
        // Change display to flex to make it visible and centered
        lightbox.style.display = 'flex';
        // Set the Lightbox image source to the clicked image's source
        lightboxImg.src = img.src;
    });
});

// 2. Close Lightbox when the "X" is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// 3. Close Lightbox when clicking anywhere in the black background
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
