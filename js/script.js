const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Lightbox Functionality
document.addEventListener('DOMContentLoaded', () => {
    // 1. Create Lightbox HTML
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);

    const lightboxClose = document.createElement('span');
    lightboxClose.className = 'lightbox-close';
    lightboxClose.innerHTML = '&times;';
    lightbox.appendChild(lightboxClose);

    // 2. Select Images
    // Select images in project cards only if they have the specific class
    const images = document.querySelectorAll('.lightbox-target');

    images.forEach(image => {
        image.addEventListener('click', e => {
            e.preventDefault(); // Prevent default link behavior if wrapped in <a>
            lightbox.classList.add('active');
            lightboxImg.src = image.src;
        });
    });

    // 3. Close Logic
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', e => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });
});
