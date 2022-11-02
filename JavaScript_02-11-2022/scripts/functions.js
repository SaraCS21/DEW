import {
    bombs_levels,
    symbols
} from "./objects.js";

function table_exist(){
    let table_exist = document.querySelector("table");

    if (table_exist){
        table_exist.remove()
    }
}

function add_bombs(table, bombs, body, size){

    while (bombs > 0){
        let num_row = `${Math.floor(Math.random() * size + 1)}`;
        let num_col = `${Math.floor(Math.random() * size + 1)}`;

        const item = document.querySelector(`.row_${num_row} .col_${num_col}`);
        
        console.log(item.innerHTML)
        
        if (item.innerHTML !== 0){
            item.textContent = symbols["bomb"];
            bombs--;
        }
    }

}

function create_table(size, body){
    table_exist();
    const table = document.createElement("table");

    for (let i = 1; i <= size; i++){
        const row = document.createElement("tr");
        row.className = `row_${i}`;

        for (let j = 1; j <= size; j++){
            const col = document.createElement("td");
            col.className = `col_${j}`;
            const texto = 0;

            col.append(texto);
            row.append(col);
        }
        table.append(row);
        table.className = "table w-50";
    }
    let bombs = bombs_levels[size]
    body.append(table);
    add_bombs(table, bombs, body, size);
    body.append(table);
}

export {
    create_table
}