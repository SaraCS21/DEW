import {
    clases
} from "./scripts/alumnos.js"

import {
    tabla_dam,
    tabla_dew
} from "./scripts/functions.js"

const body = document.querySelector("body");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const h1 = document.querySelector("h1");

let i_asc = document.createElement("i");
i_asc.className = "bx bx-chevron-up";

let i_desc = document.createElement("i");
i_desc.className = "bx bx-chevron-down";

body.addEventListener("click", e => {
    let element = e.target;
    let dam = clases.dam;
    let dew = clases.dew;

    if (element.className.includes("dam")){
        tabla_dam(dam, tbody, table, h1);

    } else if (element.className.includes("dew")){
        tabla_dew(dew, tbody, table, h1);
    }

    // DAM

    if (element.className.includes("nombre") && table.className.includes("dam") && !element.contains(i_asc)){
        element.append(i_asc);
        clases.ordenar_dam("name");
        tabla_dam(dam, tbody, table, h1);

    } else if (element.className.includes("nombre") && table.className.includes("dam") && element.contains(i_asc)){
        element.removeChild(i_asc);
        tabla_dam(dam, tbody, table, h1);

    } 
    
    if (element.className.includes("apellidos") && table.className.includes("dam") && !element.contains(i_asc) && !element.contains(i_desc)){
        element.append(i_asc);
        clases.ordenar_dam("surname_asc");
        tabla_dam(dam, tbody, table, h1);

    } else if (element.className.includes("apellidos") && table.className.includes("dam") && element.contains(i_asc) && !element.contains(i_desc)){
        element.removeChild(i_asc);
        element.append(i_desc);
        clases.ordenar_dam("surname_desc");
        tabla_dam(dam, tbody, table, h1);

    } else if (element.className.includes("apellidos") && table.className.includes("dam") && !element.contains(i_asc) && element.contains(i_desc)){
        element.removeChild(i_desc);
        tabla_dam(dam, tbody, table, h1);
    } 

    if (element.className.includes("date") && table.className.includes("dam") && !element.contains(i_asc) && !element.contains(i_desc)){
        element.append(i_asc);
        clases.ordenar_dam("date_asc");
        tabla_dam(dam, tbody, table, h1);

    } else if (element.className.includes("date") && table.className.includes("dam") && element.contains(i_asc) && !element.contains(i_desc)){
        element.removeChild(i_asc);
        element.append(i_desc);
        clases.ordenar_dam("date_desc");
        tabla_dam(dam, tbody, table, h1);

    } else if (element.className.includes("date") && table.className.includes("dam") && !element.contains(i_asc) && element.contains(i_desc)){
        element.removeChild(i_desc);
        tabla_dam(dam, tbody, table, h1);
    } 

    // DEW

    if (element.className.includes("nombre") && table.className.includes("dew") && !element.contains(i_asc)){
        element.append(i_asc);
        clases.ordenar_dew("name");
        tabla_dew(dew, tbody, table, h1);

    } else if (element.className.includes("nombre") && table.className.includes("dew") && element.contains(i_asc)){
        element.removeChild(i_asc);
        tabla_dew(dew, tbody, table, h1);

    } 
    
    if (element.className.includes("apellidos") && table.className.includes("dew") && !element.contains(i_asc) && !element.contains(i_desc)){
        element.append(i_asc);
        clases.ordenar_dew("surname_asc");
        tabla_dew(dew, tbody, table, h1);

    } else if (element.className.includes("apellidos") && table.className.includes("dew") && element.contains(i_asc) && !element.contains(i_desc)){
        element.removeChild(i_asc);
        element.append(i_desc);
        clases.ordenar_dew("surname_desc");
        tabla_dew(dew, tbody, table, h1);

    } else if (element.className.includes("apellidos") && table.className.includes("dew") && !element.contains(i_asc) && element.contains(i_desc)){
        element.removeChild(i_desc);
        tabla_dew(dew, tbody, table, h1);
    } 

    if (element.className.includes("date") && table.className.includes("dew") && !element.contains(i_asc) && !element.contains(i_desc)){
        element.append(i_asc);
        clases.ordenar_dew("date_asc");
        tabla_dew(dew, tbody, table, h1);

    } else if (element.className.includes("date") && table.className.includes("dew") && element.contains(i_asc) && !element.contains(i_desc)){
        element.removeChild(i_asc);
        element.append(i_desc);
        clases.ordenar_dew("date_desc");
        tabla_dew(dew, tbody, table, h1);

    } else if (element.className.includes("date") && table.className.includes("dew") && !element.contains(i_asc) && element.contains(i_desc)){
        element.removeChild(i_desc);
        tabla_dew(dew, tbody, table, h1);
    } 

})

table.addEventListener("click", e => {
    let element = e.target;
    let dam = clases.dam;
    let dew = clases.dew;

    if (element.nodeName === "INPUT" && element.className.includes("dam")){
        clases.mover_alumno_a_dew(element.id);
        tabla_dam(dam, tbody, table, h1);

    } else if (element.nodeName === "INPUT" && element.className.includes("dew")){
        clases.mover_alumno_a_dam(element.id);
        tabla_dew(dew, tbody, table, h1);
    }

})