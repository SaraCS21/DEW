import {
    create_table,
    show_near,
    flag_value,
    comprobe_win,
    change_face, 
    counter
} from "./functions.js";

import {
    bombs_levels,
    symbols, 
    num_colors
} from "./objects.js";

const body = document.querySelector("body");
const num_bombs = document.querySelector(".num_bombs");

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

        num_bombs.innerHTML = `💣 0${bombs_levels[size]}`;
        stop = false;

        let p_lose = document.querySelector(".lose");
        if (p_lose){
            p_lose.remove();
        }

        let p_win = document.querySelector(".win");
        if (p_win){
            p_win.remove();
        }

        counter();        

    } else if (element.nodeName === "TD" && !stop && element.textContent !== symbols["flag"]){
        let class_name = element.className
        element.className = `${class_name} selected`;
        element.style.opacity = 1;
        change_face("good");

    } else if (element.className === "emoji"){
        location.reload();
    }
    
    if (element.textContent === symbols["bomb"] && !stop){
        // const text = document.createElement("p");
        // text.className = "lose";
        // const message = "Has perdido";
        // text.append(message);
        // body.append(text);
        stop = true;
        change_face("bad");

    } else if (element.textContent === " " && !stop){
        show_near(element.className, element.parentNode.className);
    }

    if (comprobe_win(array_td, size) && !stop){
        // const text = document.createElement("p");
        // text.className = "win";
        // const message = "Has ganado";
        // text.append(message);
        // body.append(text);
        stop = true;

        change_face("winner");
    };

})

body.addEventListener("contextmenu", e => {
    let element = e.target;
    e.preventDefault();

    if (element.textContent === symbols["flag"] && !stop){
        let values = flag_value(element.className, element.parentNode.className, game_table);
        
        console.log(values[0])
        console.log(values[1])
        console.log(values[2])

        element.innerHTML = values[0]
        element.className = `${values[2]} ${num_colors[values[0]]}` ;
        element.style.opacity = 0;

    } else if (element.nodeName === "TD" && !stop && !element.className.includes("selected")){
        element.innerHTML = symbols["flag"];

        let class_element = element.className;
        let class_name = class_element.split(" ")[0];
        element.className = class_name;

        element.style.opacity = 1;

    } 
})