import Tarea from "./scripts/tarea.js";
import Agenda_Tareas from "./scripts/agenda.js";

let agenda = new Agenda_Tareas();

const body = document.querySelector("body");
const insert = document.querySelector(".insert");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const otra_tarea = document.querySelector(".otra_tarea");

body.addEventListener("click", e => {
    let element = e.target;

    if(element.className.includes("nueva_tarea")){
        const input = document.querySelectorAll("input");
        const a_input = [...input];
        a_input.pop();
        const textarea = document.querySelector("textarea");
        const select = document.querySelector("select");
        let values = [];

        a_input.forEach(a => {
            values.push(a.value)
            a.value = "";
        });
        values.push(textarea.value, select.value);
        textarea.value = "";
        
        let tarea = new Tarea(values);
        agenda.anadir_tarea(tarea);
        agenda.listar_tareas();

    } else if (element.className.includes("otra_tarea")){
        insert.classList.remove('d-none');
        table.classList.add('d-none');
        otra_tarea.classList.add('d-none');

        const input = document.querySelectorAll("input");
        const a_input = [...input];
        a_input.pop();

        a_input.forEach(a => {
            a.value = "";
        });
        
        const textarea = document.querySelector("textarea");
        textarea.value = "";
        tbody.innerHTML = "";
    }

    if (element.className.includes("nueva_tarea") && agenda.listar_tareas() !== undefined){
        insert.classList.add('d-none');
        table.classList.remove('d-none');
        otra_tarea.classList.remove('d-none');

        let tareas = agenda.listar_tareas();

        tareas.forEach(tarea =>{
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let input_check = document.createElement("input");

            input_check.setAttribute("type", "checkbox");
            input_check.setAttribute("name", "finish");
            input_check.setAttribute("value", tarea);
            input_check.className = "form-check-input";

            td1.textContent = tarea;
            td2.append(input_check);
            tr.append(td1);
            tr.append(td2);
            tbody.append(tr);
        })

        if (element.nodeName = "INPUT"){
            console.log(agenda.listar_tareas_finalizadas())
        }

        console.log(agenda.listar_tareas())

    }
})

// let opcion = prompt("¿Qué desea hacer?\n1.- Añadir una nueva tarea\n2.- Eliminar una tarea\n3.- Eliminar todas las tareas hechas\n4.- Mostrar todas las tareas");

// switch (opcion){
//     case "1":
//         let dia = prompt("¿Día de la tarea?: ");
//         let hora = prompt("Hora de la tarea?: ");
//         let tipo = prompt("¿Tipo de la tarea? (reunión, médico, clases y gestiones varias): ");
//         let lugar = prompt("¿Lugar de la tarea?: ");
//         let observaciones = prompt("¿Observaciones de la tarea?: ");

//         let nueva_tarea = new Tarea(dia, hora, lugar, observaciones, tipo);
//         agenda.nueva_tarea(nueva_tarea);
//         break;

//     case "2":
//         let dia_eliminar = prompt("¿Día de la tarea a eliminar?: ");
//         let hora_eliminar = prompt("Hora de la tarea a eliminar?: ");

//         agenda.eliminar_tarea(dia_eliminar, hora_eliminar);
//         break;

//     case "3":
//         agenda.eliminar_tareas_realizadas();
//         break;

//     case "4":
//         agenda.listar_tareas();
//         break;
// }