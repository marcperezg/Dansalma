// JavaScript
const button = document.getElementById("button");
const menuDesplegable = document.querySelector('#hiddenMenu');
const checkbox = document.getElementById("menuTrigger");
console.log(button);
console.log(checkbox);

// Añade el event listener solo una vez, no es necesario tenerlo en línea y con addEventListener.
button.addEventListener("click", () => {
    event.preventDefault();
    console.log("Button was clicked!");
    menuDesplegable.classList.toggle("active");
});


