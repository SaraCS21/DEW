const filas = document.querySelector("#filas");
const columnas = document.querySelector("#columnas");
const tamaño = document.querySelector("#tamaño");
const fuente = document.querySelector("#fuentes");
const color = document.querySelector("#colores");

const generar = document.querySelector("#generar");
const finalizar = document.querySelector("#finalizar");

const form = document.querySelector("form");
const body = document.querySelector("body");

const fuentes = ["Arial", "Cambria", "Georgia", "Verdana"];
const colores = ["#ffbf75", "#75c7ff", "#9dc09d", "#abaaff", "#ef737b", "#203e52", "#92264c", "#247121"];
const filas_columnas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const tamaños = [10, 11, 12, 13, 14];

function comprobrar_errores(){
    let fallo = false;

    if (!filas_columnas.includes(parseInt(filas.value))){
        filas.style.background = "red";
        fallo = true;
    } else {
        filas.style.background = "";
    }

    if (!filas_columnas.includes(parseInt(columnas.value))){
        columnas.style.background = "red";
        fallo = true;
    } else {
        columnas.style.background = "";
    }

    if (!tamaños.includes(parseInt(tamaño.value))){
        tamaño.style.background = "red";
        fallo = true;
    } else {
        tamaño.style.background = "";
    }

    if (!fuentes.includes(fuente.value)){
        fuente.style.background = "red";
        fallo = true;
    } else {
        fuente.style.background = "";
    }

    if (!colores.includes(color.value)){
        color.style.background = "red";
        fallo = true;
    } else {
        color.style.background = "";
    }

    return fallo;
}

function creacion_tabla(){

    const tabla_existe = document.querySelector("table");
    if (tabla_existe !== null){
        tabla_existe.remove();
    } 

    // Comprobación de los errores
    if (!comprobrar_errores()){
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
    }
}

// Evento para que al presionar el botón de submit no se recargue la página
form.addEventListener("submit", e => {
    e.preventDefault();
    color.value = "#ffbf75";
})

// Creamos la tabla
generar.addEventListener("click", () => creacion_tabla())

// Cerrar la ventana
finalizar.addEventListener("click", () => window.close())