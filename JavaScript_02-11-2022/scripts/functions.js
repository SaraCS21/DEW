import {
    bombs_levels,
    symbols,
    faces
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
            let class_name = item.className;

            if (cont === 0){
                item.textContent = " ";
                item.className = `${class_name} nothing`;
                game_table[i][j] = " ";

            } else {
                item.textContent = cont;
                
                if (cont === 1){
                    item.className = `${class_name} one`;

                } else if (cont === 2){
                    item.className = `${class_name} two`;

                } else if (cont === 3){
                    item.className = `${class_name} three`;

                } else if (cont === 4){
                    item.className = `${class_name} four`;
                }

                game_table[i][j] = cont;
            }
            
            cont = 0
        }
    }
}

function create_layout(){
    const section = document.querySelector("section");
    section.style.display = "none";

    const layout = document.querySelector(".layout");
    layout.style.display = "flex";
}

function change_face(action){
    const emoji = document.querySelector(".emoji");

    if (action === "good"){
        emoji.innerHTML = faces["good_faces"][Math.floor(Math.random() * faces["good_faces"].length)]

    } else if (action === "bad"){
        emoji.innerHTML = faces["bad_faces"][Math.floor(Math.random() * faces["bad_faces"].length)]


    } else if (action === "winner"){
        emoji.innerHTML = faces["winner_face"]
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

    create_layout();

    console.log(game_table)
}

function show_near(pos_element, pos_parent_element, size){
    pos_element = pos_element.split(" ")[0];
    pos_element = parseInt(pos_element.split("_")[1]);
    pos_parent_element = parseInt(pos_parent_element.split("_")[1]);

    let txt_pos_element = `.col_${pos_element}`;
    let txt_pos_parent_element = `.row_${pos_parent_element}`;
    
    let element = document.querySelector(`${txt_pos_parent_element} ${txt_pos_element}`)

    if ((pos_element < 1 || pos_element > parseInt(size))){
        console.log("AAA")
        return;
    } 

    if ((pos_parent_element < 1 || pos_parent_element > parseInt(size))){
        console.log("BBB")
        return;
    }  
    
    if (element.textContent === symbols["bomb"]){
        console.log("bomba")
        return;
    } 
    
    if (element.className.includes("selected")){
        console.log("c")
        return
    }

    if (element.textContent.match(/[1-9]/)){
        let class_name = element.className

        if (element.className.includes("selected")){
            element.className = `${class_name}`;
    
        } else {
            element.className = `${class_name} selected`;
        }
        element.style.opacity = 1;
        console.log("letra")
        return;

    } else {
        let class_name = element.className

        if (element.className.includes("selected")){
            element.className = `${class_name}`;
    
        } else {
            element.className = `${class_name} selected`;
        }
        element.style.opacity = 1;
    }

    let near_elements = [
        // Top
        [pos_element - 1, pos_parent_element - 1],
        [pos_element - 1, pos_parent_element    ],
        [pos_element - 1, pos_parent_element + 1],

        // Mid
        [pos_element    , pos_parent_element - 1],
        [pos_element    , pos_parent_element + 1],

        // Bottom
        [pos_element + 1, pos_parent_element - 1],
        [pos_element + 1, pos_parent_element    ],
        [pos_element + 1, pos_parent_element + 1],
    ]

    near_elements.forEach(element => {
        const [row, col] = element;

        let txt_pos_element = `.col_${row}`;
        let txt_pos_parent_element = `.row_${col}`;

        show_near(txt_pos_element, txt_pos_parent_element, size);
    });
}

function flag_value(class_element, pos_parent_element, game_table){
    let pos_element = class_element.split(" ")[0];
    pos_element = parseInt(pos_element.split("_")[1]) -1;
    pos_parent_element = parseInt(pos_parent_element.split("_")[1]) -1;

    let value = game_table[pos_parent_element][pos_element];
    
    return [value, pos_element, class_element.split(" ")[0]];
}

function comprobe_win(td, size){
    let td_bombs = td.filter(e => !e.className.includes("selected"));

    if (td_bombs.length === bombs_levels[size]){
        return true;
    }
}

function counter(){
    const game_time = document.querySelector(".game_time");
    let s = 0;
    let m = 0;
    let value_s = "00";
    let value_m = "00";
    
    setInterval(function(){

        if (s <= 59){
            if (s <= 9){
                value_s = `0${s}`;

            } else {
                value_s = `${s}`;
            }
        } 
        
        if (s === 60){
            s = 0;
            value_s = `00`;
            m++;

            if (m <= 9){
                value_m = `0${m}`;
            } else {
                value_m = `${m}`;
            }
        }

        game_time.innerHTML = `⏱ ${value_m}:${value_s}`;

        s++;
    },1000);
}

export {
    create_table,
    show_near,
    flag_value,
    comprobe_win,
    change_face, 
    counter
}