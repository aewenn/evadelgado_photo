document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.slider img');
    let currentImageIndex = 0;

    setInterval(() => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }, 3000); 
});

