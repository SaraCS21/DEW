import {API_AITOR} from "../constant/JSON_URL.js"

const responseAitor = async () => {
    const response = await fetch(API_AITOR);
    const data = await response.json();

    const section = document.querySelector("#container");

    const values = data.map(value => {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const container = document.createElement("div");
        const name = document.createElement("h4");
        const line = document.createElement("div");
        const dataContainer = document.createElement("div");
        const descriptionContainer = document.createElement("div");
        const descriptionData = document.createElement("p");
        const genreContainer = document.createElement("div");
        const genre = document.createElement("p");
        const genreData = document.createElement("p");
        const priceContainer = document.createElement("div");
        const price = document.createElement("p");
        const priceData = document.createElement("p");
        const releaseDataContainer = document.createElement("div");
        const releaseData = document.createElement("p");
        const releaseDataData = document.createElement("p");

        card.className = "w-9/12 md:w-4/12 xl:w-2/12 p-6 m-8 flex flex-col justify-center items-middle border rounded-lg border-sky-600 bg-sky-100 shadow-lg shadow-sky-500/30";
        image.className = "w-full";
        container.className = "flex flex-col justify-center items-middle";
        name.className = "mt-3 mb-3 text-center text-3xl font-semibold";
        line.className = "w-full h-[0.1rem] bg-sky-800 opacity-20 mb-3";
        dataContainer.className = "m-auto";
        descriptionContainer.className = "mb-2";
        genreContainer.className = "flex mb-1";
        priceContainer.className = "flex mb-1";
        releaseDataContainer.className = "flex";
        genre.className = "font-semibold mr-1";
        price.className = "font-semibold mr-1";
        releaseData.className = "font-semibold mr-1";

        image.src = value["img"];
        image.alt = `image_${value["name"]}`;

        name.textContent = value["name"];
        genre.textContent = "Género:"
        price.textContent = "Precio:"
        releaseData.textContent = "Fecha de salida:"
        descriptionData.textContent = value["description"];
        genreData.textContent = value["genre"];
        priceData.textContent = `${value["price"]}€`;
        releaseDataData.textContent = value["release_date"];

        priceContainer.append(price, priceData);
        releaseDataContainer.append(releaseData, releaseDataData);
        descriptionContainer.append(descriptionData);
        genreContainer.append(genre, genreData);
        dataContainer.append(descriptionContainer, genreContainer, priceContainer, releaseDataContainer);
        container.append(name, line, dataContainer);
        card.append(image, container);

        return card;
    })

    section.append(...values);
}

export { responseAitor }
