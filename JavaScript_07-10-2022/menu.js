import Tarea from "./tarea.js";
import Agenda_Tareas from "./agenda.js";

let agenda = new Agenda_Tareas();

let opcion = prompt("¿Qué desea hacer?\n1.- Añadir una nueva tarea\n2.- Eliminar una tarea\n3.- Eliminar todas las tareas hechas\n4.- Mostrar todas las tareas");

switch (opcion){
    case "1":
        let dia = prompt("¿Día de la tarea?: ");
        let hora = prompt("Hora de la tarea?: ");
        let tipo = prompt("¿Tipo de la tarea? (reunión, médico, clases y gestiones varias): ");
        let lugar = prompt("¿Lugar de la tarea?: ");
        let observaciones = prompt("¿Observaciones de la tarea?: ");

        let nueva_tarea = new Tarea(dia, hora, lugar, observaciones, tipo);
        agenda.nueva_tarea(nueva_tarea);
        break;

    case "2":
        let dia_eliminar = prompt("¿Día de la tarea a eliminar?: ");
        let hora_eliminar = prompt("Hora de la tarea a eliminar?: ");

        agenda.eliminar_tarea(dia_eliminar, hora_eliminar);
        break;

    case "3":
        agenda.eliminar_tareas_realizadas();
        break;

    case "4":
        agenda.listar_tareas();
        break;
}