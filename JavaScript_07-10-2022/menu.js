import Tarea from "./tarea.js";
import Agenda_Tareas from "./agenda.js";

let agenda = new Agenda_Tareas();

let opcion = prompt("¿Qué desea hacer?\n1.- Añadir una nueva tarea\n2.- Modificar día de una tarea\n3.- Modificar hora de una tarea\n4.- Eliminar una tarea\n5.- Eliminar todas las tareas hechas\n6.- Mostrar todas las tareas");

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
        let dia1 = prompt("¿Día de la tarea a cambiar?: ");
        let hora1 = prompt("Hora de la tarea a cambiar?: ");

        let tareas = agenda.tareas();

        tareas.forEach(tarea => {
            if (tarea.dia() === dia1 && tarea.hora === hora1){
                tarea.dia(nuevo_dia);
            } else {
                
            }
        });

        let nuevo_dia = prompt("¿Día nuevo?: ");



    case "3":
        break;

    case "4":
        let dia_eliminar = prompt("¿Día de la tarea a eliminar?: ");
        let hora_eliminar = prompt("Hora de la tarea a eliminar?: ");

        agenda.eliminar_tarea(dia_eliminar, hora_eliminar);
        break;

    case "5":
        agenda.eliminar_tareas_realizadas();
        break;

    case "6":
        agenda.listar_tareas();
        break;
}