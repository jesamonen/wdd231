// ==========================================
// HERO GALLERY SLIDESHOW
// ==========================================

function initGallery() {
    const slides = document.querySelectorAll(".gallery-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector("#prevSlide");
    const nextBtn = document.querySelector("#nextSlide");

    if (!slides.length) return;

    let currentIndex = 0;
    let autoPlayTimer = null;

    function showSlide(index) {
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 4000); // Transitions every 4 seconds
    }

    function stopAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            showSlide(currentIndex + 1);
            startAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            showSlide(currentIndex - 1);
            startAutoPlay();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            startAutoPlay();
        });
    });

    // Start automated cycle on page load
    startAutoPlay();
}

// Run script after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    initGallery();
});