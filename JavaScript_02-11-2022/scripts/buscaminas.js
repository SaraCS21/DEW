import {
    create_table,
    show_near,
    flag_value,
    comprobe_win
} from "./functions.js";

import {
    symbols
} from "./objects.js";

const body = document.querySelector("body");

let td = [];
let array_td = [];
let size = 0;

let stop = false;
let game_table = [];

body.addEventListener("click", e => {
    let element = e.target;

    if (element.value !== undefined){
        game_table = [];
        td = [];
        array_td = [];
        size = element.value

        create_table(size, body, game_table);
        td = document.querySelectorAll("td");
        array_td = [...td];

        stop = false;

        let p_lose = document.querySelector(".lose");
        if (p_lose){
            p_lose.remove();
        }

        let p_win = document.querySelector(".win");
        if (p_win){
            p_win.remove();
        }

    } else if (element.nodeName === "TD" && !stop && element.textContent !== symbols["flag"]){
        let class_name = element.className
        element.className = `${class_name} selected`;
        element.style.opacity = 1;
    } 
    
    if (element.textContent === symbols["bomb"] && !stop){
        const text = document.createElement("p");
        text.className = "lose";
        const message = "Has perdido";
        text.append(message);
        body.append(text);
        stop = true;

    } else if (element.textContent === " " && !stop){
        show_near(element.className, element.parentNode.className);
    }

    if (comprobe_win(array_td, size) && !stop){
        const text = document.createElement("p");
        text.className = "win";
        const message = "Has ganado";
        text.append(message);
        body.append(text);
        stop = true;
    };

})

body.addEventListener("contextmenu", e => {
    let element = e.target;
    e.preventDefault();

    if (element.textContent === symbols["flag"] && !stop){
        let value = flag_value(element.className, element.parentNode.className, game_table);
        element.innerHTML = value;
        element.style.opacity = 0;

    } else if (element.nodeName === "TD" && !stop){
        element.innerHTML = symbols["flag"];
        element.style.opacity = 1;
    } 
})