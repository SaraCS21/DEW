import {
    create_table,
    mostrar_cercanos
} from "./functions.js";

import {
    bombs_levels,
    symbols
} from "./objects.js";

const body = document.querySelector("body");

body.addEventListener("click", e => {
    let element = e.target;

    if (element.value !== undefined){
        create_table(element.value, body);

    } else if (element.nodeName === "TD"){
        let class_name = element.className
        element.className = `${class_name} selected`;
        element.style.opacity = 1;

    } 
    
    if (element.textContent === symbols["bomb"]){
        const text = document.createElement("p");
        const message = "Has perdido";
        text.append(message);
        body.append(text);

        // algo para no poder seguir jugando
    } else if (element.textContent === ""){
        mostrar_cercanos(element.className, element.parentNode.className);
    }

})