let arr = [];
for (let i = 1; i <= 50; i++) {
    arr.push(i);
}

const API_URL = `https://rickandmortyapi.com/api/character/${arr}`;

const res = await fetch(API_URL);
const data = await res.json();

const section = document.querySelector("#container");

data.forEach(element => {
    const div = document.createElement("div");
    const name = document.createElement("h2");
    const img = document.createElement("img");

    div.className = "xl:w-[16%] w-[40%] m-2 p-3 bg-[#02b1c8] mb-5 rounded-lg xl:opacity-70 hover:opacity-100 hover:shadow-lg hover:shadow-cyan-500/50";

    name.className = "w-full text-center xl:mb-2 xl:font-semibold text-sm xl:text-xl";
    name.textContent = element.name;
    
    img.className = "w-full rounded-t-lg mb-3";
    img.src = element.image;

    div.append(img, name);
    section.append(div);
});