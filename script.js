document.addEventListener('DOMContentLoaded', function () {
    const carouselEl = document.querySelector('#businessCarousel');
    if (carouselEl) {
        const carousel = new bootstrap.Carousel(carouselEl, {
            interval: 5000,
            ride: 'carousel',
            pause: 'hover'
        });

        // Smooth manual controls hooked to custom arrows
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => carousel.prev());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => carousel.next());
        }

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') carousel.prev();
            if (e.key === 'ArrowRight') carousel.next();
        });
    }
});
