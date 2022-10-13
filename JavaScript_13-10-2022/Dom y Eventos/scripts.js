const filas = document.querySelector("#filas");
const columnas = document.querySelector("#columnas");

const generar = document.querySelector("#generar");
const finalizar = document.querySelector("#finalizar");

function comprobrar_errores(){
    if (filas.value < 1 || filas.value > 12){
        console.log("Hola");
    } else {
        console.log("Adios");
    }
}

generar.addEventListener("click", () => comprobrar_errores())

finalizar.addEventListener("click", () => window.close())