import Tarea from "./scripts/tarea.js";
import Agenda_Tareas from "./scripts/agenda.js";

let agenda = new Agenda_Tareas();

const body = document.querySelector("body");
const insert = document.querySelector(".insert");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const otra_tarea = document.querySelector(".otra_tarea");
const tareas_activas = document.querySelector(".tareas");
const tareas_finalizadas = document.querySelector(".tareas_finalizadas");
const th = document.querySelector("th");

body.addEventListener("click", e => {
    let element = e.target;

    if(element.className.includes("nueva_tarea")){
        const input = document.querySelectorAll("input");
        const a_input = [...input];
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

        if (values[0] !== "" && values[1] !== ""){
            agenda.anadir_tarea(tarea);
        }

        let hoy = new Date();
        if (tarea.dia < hoy.getDate() || (tarea.dia !== hoy.getDate() && tarea.dia < hoy.getHours())){
            agenda.eliminar_tareas_realizadas();
        }

    } else if (element.className.includes("otra_tarea")){
        insert.classList.remove('d-none');
        table.classList.add('d-none');
        otra_tarea.classList.add('d-none');
        tareas_finalizadas.classList.add('d-none');

        const input = document.querySelectorAll("input");
        const a_input = [...input];

        a_input.forEach(a => {
            a.value = "";
        });
        
        const textarea = document.querySelector("textarea");
        textarea.value = "";
        tbody.innerHTML = "";
    }

    if (element.className.includes("nueva_tarea") && agenda.listar_tareas().length !== 0 || element.className.includes("tareas")){
        tbody.innerHTML = "";
        insert.classList.add('d-none');
        table.classList.remove('d-none');
        otra_tarea.classList.remove('d-none');
        tareas_activas.classList.add('d-none');
        tareas_finalizadas.classList.remove('d-none');

        th.innerHTML = "Tareas";
        let tareas = agenda.listar_tareas();

        tareas.forEach(tarea =>{
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let input_check = document.createElement("input");

            input_check.setAttribute("type", "checkbox");
            input_check.setAttribute("name", "finish");
            input_check.setAttribute("id", `${tarea.dia}-${tarea.hora}`);
            input_check.className = "form-check-input";

            if (tarea.checked){
                input_check.checked = true;
            }

            td1.textContent = tarea.mostrar_datos();
            td2.append(input_check);
            tr.append(td1);
            tr.append(td2);
            tbody.append(tr);
        })
    }

    if (element.className.includes("tareas_finalizadas")  && agenda.listar_tareas_finalizadas().length !== 0){
        insert.classList.add('d-none');
        table.classList.remove('d-none');
        otra_tarea.classList.remove('d-none');
        tareas_activas.classList.remove('d-none');
        tareas_finalizadas.classList.add('d-none');
        tbody.innerHTML = "";

        th.innerHTML = "Tareas finalizadas";
        let tareas = agenda.listar_tareas_finalizadas();

        tareas.forEach(tarea =>{
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");

            td1.textContent = tarea.mostrar_datos();
            tr.append(td1);
            tr.append(td2);
            tbody.append(tr);
        })
    }
})

table.addEventListener("click", e => {
    let element = e.target;

    if (element.nodeName === "INPUT"){
        let id = element.id.split("-");
        
        let tareas = agenda.listar_tareas();

        tareas.forEach(tarea => {
            if (tarea.dia === id[0] && tarea.hora === id[1]){
                agenda.anadir_tarea_finalizada(tarea);
                tarea.checked = true;
            }
        })
    }
})