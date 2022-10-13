let colores = document.querySelector("#colores");
let boton = document.querySelector(".submit");
let body = document.querySelector("body");
let form = document.querySelector("form");


function cambio_color(){
    let color = colores.value;
    body.style.background = color;
}

form.addEventListener("submit", e => {
    e.preventDefault()
    colores.value = ""
})

boton.addEventListener("click", () => cambio_color())