import {API_EDWIN} from "../constant/JSON_URL.js"

const responseEdwin = async () => {
    const response = await fetch(API_EDWIN);
    const data = await response.json();

    const section = document.querySelector("#container");

    console.log(data)
    // actualizadoen, creadoen, descripcion, fecha, id, lugar, maxpersonas, nombre, precio

    const values = data.map(value => {
        const card = document.createElement("div");
        const container = document.createElement("div");
        const name = document.createElement("h4");
        const line = document.createElement("div");
        const dataContainer = document.createElement("div");
        const descriptionContainer = document.createElement("div");
        const description = document.createElement("p");
        const descriptionData = document.createElement("p");
        const placeContainer = document.createElement("div");
        const place = document.createElement("p");
        const placeData = document.createElement("p");
        const maxPersonsContainer = document.createElement("div");
        const maxPersons = document.createElement("p");
        const maxPersonsData = document.createElement("p");
        const dateContainer = document.createElement("div");
        const date = document.createElement("p");
        const dateData = document.createElement("p");

        card.className = "w-9/12 md:w-4/12 xl:w-2/12 p-6 m-9 flex flex-col justify-center items-middle border rounded-lg border-green-600 bg-green-100 shadow-lg shadow-green-500/30";
        container.className = "flex flex-col justify-center items-middle";
        name.className = "mt-3 mb-3 text-center text-3xl font-semibold";
        line.className = "w-full h-[0.1rem] bg-green-800 opacity-20 mb-3";
        dataContainer.className = "m-auto";
        placeContainer.className = "flex";
        descriptionContainer.className = "flex";
        maxPersonsContainer.className = "flex";
        dateContainer.className = "flex";
        place.className = "font-semibold mr-1";
        maxPersons.className = "font-semibold mr-1";
        description.className = "font-semibold mr-1";
        date.className = "font-semibold mr-1";

        name.textContent = value["nombre"];
        place.textContent = "Localización:"
        maxPersons.textContent = "Máximo de personas:"
        description.textContent = "Descripción:"
        date.textContent = "Fecha:"
        placeData.textContent = value["lugar"];
        maxPersonsData.textContent = value["maxpersonas"];
        descriptionData.textContent = value["descripcion"];
        dateData.textContent = value["fecha"];

        dateContainer.append(date, dateData);
        descriptionContainer.append(description, descriptionData);
        placeContainer.append(place, placeData);
        maxPersonsContainer.append(maxPersons, maxPersonsData);
        dataContainer.append(descriptionContainer, dateContainer, placeContainer, maxPersonsContainer);
        container.append(name, line, dataContainer);
        card.append(container);

        return card;        
    })

    section.append(...values)
}

export { responseEdwin }
