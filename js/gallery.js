
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('#gallery-grid');
    const lightbox = document.querySelector('#lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeButton = lightbox.querySelector('.lightbox-close');
    const prevButton = lightbox.querySelector('.lightbox-prev');
    const nextButton = lightbox.querySelector('.lightbox-next');

    if (!galleryGrid) return;

    const galleryItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
    let currentIndex = 0;

    function showImage(index) {
        const item = galleryItems[index];
        const imgSrc = item.href;
        const caption = item.dataset.caption;

        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption;
        currentIndex = index;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        showImage(nextIndex);
    }

    function showPrevImage() {
        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        showImage(prevIndex);
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showImage(index);
        });
    });

    closeButton.addEventListener('click', hideLightbox);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') hideLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
        }
    });
});
