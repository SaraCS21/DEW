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

function create_game_table(size, game_table){
    size = parseInt(size);

    for (let i = 0; i < size; i++){
        game_table.push(new Array(size).fill("-", 0, size));
    }

    return game_table;
}

function add_bombs(bombs, size, game_table){

    console.log(bombs)
    console.log(size)

    while (bombs > 0){
        let num_row = `${Math.floor(Math.random() * size + 1)}`;
        let num_col = `${Math.floor(Math.random() * size + 1)}`;

        const item = document.querySelector(`.row_${num_row} .col_${num_col}`);

        if (item.innerHTML !== symbols["bomb"]){
            item.textContent = symbols["bomb"];
            game_table[num_row-1][num_col-1] = symbols["bomb"];
            bombs--;
        }
    }
    return game_table;
}

function modify_table(size, game_table){
    
    let bomb = symbols["bomb"];
    let cont = 0;

    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){

            if (game_table[i][j] === bomb){
                cont = bomb;

            } else {
                if (game_table[i-1] !== undefined){
                    // Vertical
                    if (game_table[i-1][j] === bomb){
                        cont++
                    }
                    // Diagonal
                    if ((game_table[i][j+1] !== undefined) && (game_table[i-1][j+1] == bomb)){
                        cont++;
                    }
                    if ((game_table[i][j-1] !== undefined) && (game_table[i-1][j-1] == bomb)){
                        cont++;
                    }
                }
    
                if (game_table[i+1] !== undefined){
                    // Vertical
                    if (game_table[i+1][j] == bomb){
                        cont++;
                    }
                    // Diagonal
                    if ((game_table[i][j+1] !== undefined) && (game_table[i+1][j+1] == bomb)){
                        cont++;
                    }
                    if ((game_table[i][j-1] !== undefined) && (game_table[i+1][j-1] == bomb)){
                        cont++;
                    }
                }
    
                // Horizontal
                if ((game_table[i][j+1] !== undefined) && (game_table[i][j+1] == bomb)){
                    cont++;
                }
                if ((game_table[i][j-1] !== undefined) && (game_table[i][j-1] == bomb)){
                    cont++;
                }
            }

            const item = document.querySelector(`.row_${i+1} .col_${j+1}`);

            if (cont === 0){
                item.textContent = " ";
                game_table[i][j] = " ";

            } else {
                item.textContent = cont;
                game_table[i][j] = cont;
            }
            
            cont = 0
        }
    }
}

function create_table(size, body, game_table){
    table_exist();
    game_table = create_game_table(size, game_table);
    const table = document.createElement("table");

    for (let i = 1; i <= size; i++){
        const row = document.createElement("tr");
        row.className = `row_${i}`;

        for (let j = 1; j <= size; j++){
            const col = document.createElement("td");
            col.className = `col_${j}`;
            col.style.opacity = 0;
            const texto = 0;

            col.append(texto);
            row.append(col);
        }
        table.append(row);
        table.className = "table";
    }
    let bombs = bombs_levels[size]
    body.append(table);
    game_table = add_bombs(bombs, size, game_table);
    body.append(table);
    modify_table(size, game_table);
    body.append(table);

    console.log(game_table)
}

function show_near(pos_element, pos_parent_element){
    pos_element = pos_element.split(" ")[0];
    pos_element = parseInt(pos_element.split("_")[1]);
    pos_parent_element = parseInt(pos_parent_element.split("_")[1]);
    let pos = [-1, 0, 1];

    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            let new_pos_parent_element = pos_parent_element + pos[j];
            let new_pos_element = pos_element + pos[i];
            let class_name = "";

            let element = document.querySelector(`.row_${new_pos_parent_element} .col_${new_pos_element}`);

            if (element !== null){
                class_name = element.className

                if (element.className.includes("selected")){
                    element.className = `${class_name}`;
    
                } else {
                    element.className = `${class_name} selected`;
                }
            
                element.style.opacity = 1;
            }
        }
    }

    // for (let i = 0; i < 3; i++){
    //     for (let j = 0; j < 3; j++){
    //         let new_pos_parent_element = pos_parent_element + pos[j];
    //         let new_pos_element = pos_element + pos[i];
    //         let element = document.querySelector(`.row_${new_pos_parent_element} .col_${new_pos_element}`);

    //         if (element.textContent === " "){
    //             console.log(element.className)
    //             console.log(element.parentNode.className)
    //             show_near(element.className, element.parentNode.className);
    //         }
    //     }
    // }
}

function flag_value(pos_element, pos_parent_element, game_table){
    pos_element = pos_element.split(" ")[0];
    pos_element = parseInt(pos_element.split("_")[1]) -1;
    pos_parent_element = parseInt(pos_parent_element.split("_")[1]) -1;

    let value = game_table[pos_parent_element][pos_element];
    
    return value;
}

function comprobe_win(td, size){
    let td_bombs = td.filter(e => !e.className.includes("selected"));

    if (td_bombs.length === bombs_levels[size]){
        return true;
    }
}

export {
    create_table,
    show_near,
    flag_value,
    comprobe_win
}