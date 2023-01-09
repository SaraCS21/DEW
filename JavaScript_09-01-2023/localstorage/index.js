const send = document.querySelector("#send");
const clear = document.querySelector("#clear");
const body = document.querySelector("body");

send.addEventListener("click", e =>{
    let exit = false;

    const values = [...document.querySelectorAll("input")];
    
    values.forEach(value => {
        if (value.value === ""){
            exit = true;
        }
    })

    if (!exit){
        localStorage.setItem("name", values[0].value);
        localStorage.setItem("font_color", values[1].value);
        localStorage.setItem("background_color", values[2].value);

        window.location.reload();
    }
})

clear.addEventListener("click", e => {
    localStorage.clear();
    window.location.reload();
})

if (localStorage.getItem("name") || localStorage.getItem("font_color") || localStorage.getItem("background_color")){
    welcome();
}

function welcome(){
    const main = document.querySelector("main");
    const section = document.querySelector("section");
    section.remove();

    const text = document.createElement("p");
    text.textContent = `Bienvenido/a ${localStorage.getItem("name")}`;
    text.style.color = localStorage.getItem("font_color");

    main.insertBefore(text, clear);

    body.style.backgroundColor = localStorage.getItem("background_color");

    clear.className = clear.className.replace("d-none", "d-block");
}

