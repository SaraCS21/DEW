import agenda from "../scripts/agenda.js";
import { 
    insert 
} from "../scripts/insertar.js";

const body = document.querySelector("body");
const a = document.querySelector("a");

let dia = document.querySelector("#dia");
let hora = document.querySelector("#hora");
let lugar = document.querySelector("#lugar");

console.log(agenda.listar_tareas())

if (agenda.listar_tareas() === undefined && !document.querySelector(".nueva_tarea")){
    const h1 = document.createElement("h1");
    h1.textContent = "No hay tareas definidas";
    body.insertBefore(h1, a);
}

body.addEventListener("click", e => {
    let element = e.target;

    if (element.className.includes("nueva_tarea") && dia.value !== "" && hora.value !== "" && lugar.value !== ""){
        dia = dia.value;
        hora = hora.value;
        lugar = lugar.value;

        let comentario = document.querySelector("#comentario");
        comentario = comentario.value;

        let tipo = document.querySelector("#tipo");
        tipo = tipo.value;

        let tarea = insert(dia, hora, lugar, comentario, tipo, agenda);

        console.log(tarea);

        agenda.anadir_tarea(tarea);
    } 
})


// console.log(agenda.listar_tareas());

