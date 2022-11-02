import {
    create_table
} from "./functions.js";

const body = document.querySelector("body");

body.addEventListener("click", e => {
    let element = e.target;

    if (element.value !== undefined){
        create_table(element.value, body);

    } else if (element.nodeName === "TD"){
        element.className = "selected";
    }

})