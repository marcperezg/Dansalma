// JavaScript
const button = document.getElementById("button");
const menuDesplegable = document.querySelector('#hiddenMenu');
const svgAnimation = document.getElementById("trigger");
console.log(button);

// Añade el event listener solo una vez, no es necesario tenerlo en línea y con addEventListener.
button.addEventListener("click", () => {
    event.preventDefault();
    console.log("Button was clicked!");
    menuDesplegable.classList.toggle("active");
    svgAnimation.classList.toggle("animation-trigger");
});

menuDesplegable.addEventListener("click", () => {
    event.preventDefault();
    menuDesplegable.classList.toggle("active");
    svgAnimation.classList.toggle("animation-trigger");
});


