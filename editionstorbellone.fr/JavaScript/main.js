const slider = document.querySelector('.carousel-list');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.scrollBehavior = 'auto'; // Désactive le smooth pendant le drag
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.scrollBehavior = 'smooth'; // Réactive le smooth pour le snap
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Ajustez la vitesse ici
    slider.scrollLeft = scrollLeft - walk;
});

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sideMenu.classList.remove('active');
});