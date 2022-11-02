const filas = document.querySelector("#filas");
const columnas = document.querySelector("#columnas");
const tamaño = document.querySelector("#tamaño");
const fuente = document.querySelector("#fuentes");
const color = document.querySelector("#colores");

const generar = document.querySelector("#generar");
const finalizar = document.querySelector("#finalizar");

const form = document.querySelector("form");
const body = document.querySelector("body")

function comprobrar_errores(){
    filas.classList = ((filas.value < 1 || filas.value > 12) && !Number.isInteger(filas.value)) ? "fallo" : "";
    columnas.classList = ((columnas.value < 1 || columnas.value > 12) && !Number.isInteger(columnas.value)) ? "fallo" : "";
    tamaño.classList = ((tamaño.value < 1 || tamaño.value > 12) && !Number.isInteger(tamaño.value)) ? "fallo" : "";
}

function creacion_tabla(){
    const tabla = document.createElement("table");

    for (let i = 1; i <= filas.value; i++){
        const fila = document.createElement("tr");

        for (let j = 1; j <= columnas.value; j++){
            const columna = document.createElement("td");
            const texto = `F${i}, C${j}`;

            columna.append(texto);
            fila.append(columna);
        }

        if (i % 2 !== 0){
            fila.style.background = color.value;
        }
        tabla.append(fila);
    }
    body.append(tabla);
    tabla.style.fontSize = `${tamaño.value}px`;
    tabla.style.fontFamily = `${fuente.value}`;

    console.log(tamaño.value)
}

// Evento para que al presionar el botón de submit no se recargue la página
form.addEventListener("submit", e => {
    e.preventDefault()
    color.value = "#ffbf75"
})

// Comprobación de los errores
generar.addEventListener("click", () => comprobrar_errores())

// Creamos la tabla
generar.addEventListener("click", () => creacion_tabla())

// Cerrar la ventana
finalizar.addEventListener("click", () => window.close())