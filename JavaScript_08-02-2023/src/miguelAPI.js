import {API_MIGUEL} from "../constant/JSON_URL.js"

const responseMiguel = async () => {
    const response = await fetch(API_MIGUEL);
    const data = await response.json();

    const section = document.querySelector("#container");

    const values = data.map(value => {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const container = document.createElement("div");
        const name = document.createElement("h4");
        const line = document.createElement("div");
        const dataContainer = document.createElement("div");
        const emailContainer = document.createElement("div");
        const email = document.createElement("p");
        const emailData = document.createElement("p");
        const addressContainer = document.createElement("div");
        const address = document.createElement("p");
        const addressData = document.createElement("p");

        card.className = "w-9/12 md:w-4/12 xl:w-2/12 p-6 m-8 flex flex-col justify-center items-middle border rounded-lg border-red-600 bg-red-100 shadow-lg shadow-red-500/30";
        image.className = "w-full";
        container.className = "flex flex-col justify-center items-middle";
        name.className = "mt-3 mb-3 text-center text-3xl font-semibold";
        line.className = "w-full h-[0.1rem] bg-red-800 opacity-20 mb-3";
        dataContainer.className = "m-auto";
        emailContainer.className = "flex";
        addressContainer.className = "flex";
        email.className = "font-semibold mr-1";
        address.className = "font-semibold mr-1";

        image.src = value["image"];
        image.alt = `image_${value["name"]}`;

        name.textContent = `${value["name"]} ${value["lastname"]}`;
        email.textContent = "Email:"
        address.textContent = "Dirección:"
        emailData.textContent = value["email"];
        addressData.textContent = value["address"];

        emailContainer.append(email, emailData);
        addressContainer.append(address, addressData);
        dataContainer.append(emailContainer, addressContainer);
        container.append(name, line, dataContainer);
        card.append(image, container);

        return card;
    })

    section.append(...values)
}

export { responseMiguel }
