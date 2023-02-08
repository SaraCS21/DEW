import {API_MIGUEL} from "../constant/JSON_URL.js"

const responseMiguel = async () => {
    const response = await fetch(API_MIGUEL);
    const data = await response.json();

    const section = document.querySelector("#container");

    const values = data.map(value => {

        
    })

    section.append(...values)
}

export { responseMiguel }
