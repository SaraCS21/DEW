import { responseAitor } from "./aitorAPI.js"
import { responseMiguel } from "./miguelAPI.js"
import { responseEdwin } from "./edwinAPI.js"

const main = document.querySelector("main");

main.addEventListener("click", e => {
    const element = e.target;

    const section = document.querySelector("#container")

    if (element.id === "aitor"){
        section.textContent = "";
        responseAitor()

    } else if (element.id === "miguel"){
        section.textContent = "";
        responseMiguel()

    } else if (element.id === "edwin"){
        section.textContent = "";
        responseEdwin()
    }
})



// responseAitor()