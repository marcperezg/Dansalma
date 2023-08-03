
// Variable para almacenar el número de clics realizados en el enlace
let clickCount = 0;

// Agregar el evento click a los enlaces
const links = document.querySelectorAll('#enlace');
console.log(links);
links.forEach(link => link.addEventListener("click", handleClick));

// Función para manejar el evento click en los enlaces
function handleClick(event) {
  event.preventDefault(); // Evitamos que el enlace se abra inmediatamente

  // Incrementamos el contador de clics
  clickCount++;

  // Esperamos un corto período de tiempo (ejemplo: 500 ms)
  // para permitir el segundo clic antes de abrir la URL
  setTimeout(() => {
    // Si se hicieron exactamente dos clics, abrimos la URL
    if (clickCount === 2) {
        console.log(event);
      const url = event.currentTarget.getAttribute("href");
      window.open(url, "_blank");
    }

    // Reseteamos el contador de clics
    clickCount = 0;
  }, 500);
}


