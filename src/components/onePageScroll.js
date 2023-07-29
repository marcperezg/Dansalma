document.addEventListener('DOMContentLoaded', function () {

    // Seleccionar el div con el identificador "landing-header"
    const navItemDiv = document.getElementById('landing-header');

    // Seleccionar todos los elementos <a> dentro del div con el identificador "landing-header"
    const navLinks = navItemDiv.querySelectorAll('a');

    // Agregar el evento de clic a cada enlace para el desplazamiento suave
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            smoothScroll(target);
        });
    });

    // Función para el desplazamiento suave
    function smoothScroll(target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }

});
