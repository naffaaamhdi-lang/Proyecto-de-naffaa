
//  Alerta al hacer clic en "¡Empieza Ahora!"
const btnHero = document.querySelector('.btn-hero');
btnHero.addEventListener('click', () => {
    alert('Gracias por querer empezar tu mejor versión con nosotros!');
});

// Cambiar fondo de sección hero al hacer clic
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('click', () => {
    heroSection.style.backgroundColor = '#0e0c0c';
});