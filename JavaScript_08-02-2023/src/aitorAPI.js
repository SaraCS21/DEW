import {API_AITOR} from "../constant/JSON_URL.js"

const responseAitor = async () => {
    const response = await fetch(API_AITOR);
    const data = await response.json();

    const section = document.querySelector("#container");

    const values = data.map(value => {

        
    })

    section.append(...values)
}

export { responseAitor }
