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

