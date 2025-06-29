// Funcionalidades globales:
// - Toggle del menú hamburguesa en móviles
// - Alternar modo oscuro/claro
// - Se ejecuta al cargar el DOM

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger) {
    hamburger.addEventListener('click', () => navMenu.classList.toggle('show')
    );
}

const toggleBtn = document.getElementById('dark-toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click',
        () => document.documentElement.classList.toggle('dark-mode'));
}
