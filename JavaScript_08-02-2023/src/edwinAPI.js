import {API_EDWIN} from "../constant/JSON_URL.js"

const responseEdwin = async () => {
    const response = await fetch(API_EDWIN);
    const data = await response.json();

    const section = document.querySelector("#container");

    const values = data.map(value => {

        
    })

    section.append(...values)
}

export { responseEdwin }
