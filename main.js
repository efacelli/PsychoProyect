document.querySelectorAll('#navbar a[href^="#"]').forEach(anchor => {
    // Agregar event listener para el clic
    anchor.addEventListener('click', function(e) {
        // Prevenir el comportamiento predeterminado del enlace
        e.preventDefault();
        
        // Obtener el destino del enlace (la sección)
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Realizar el desplazamiento suave
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navbar");

// Crear el overlay
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Cerrar menú cuando se hace clic en un enlace o en el overlay
const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
};

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", closeMenu));
overlay.addEventListener("click", closeMenu);
