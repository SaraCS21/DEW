import Tarea from "../scripts/tarea.js";


function insert(dia, hora, lugar, observaciones, tipo, agenda){
    
    let tarea = new Tarea(dia, hora, lugar, observaciones, tipo);

    return tarea;

}

export {
    insert
}