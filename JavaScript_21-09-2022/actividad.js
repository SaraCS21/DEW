function crear_tablero(){
    let filas = prompt("Diga la cantidad de filas: ")
    let columnas = prompt("Diga la cantidad de columnas: ")
    let tabla = []
    let fila_tablero = []
    let fin = true

    if (!/[0-9]/.test(filas) || !/[0-9]/.test(filas)){
        alert("Fila o columna mal introducida.")
    }

    else{
        for (let columna = 0; columna < parseInt(columnas); columna++){
            for (let fila = 0; fila < parseInt(filas); fila++){
            
                let num = prompt("Diga un valor binario: ")
    
                if (num !== "0" && num !== "1"){
                    alert("Los números deben de ser binarios.")
                    fin = false
                    break;
                }
    
                else{
                    fila_tablero.push(num)
                }
            }
            
            if (!fin){
                break;
            }

            tabla.push(fila_tablero)
            fila_tablero = []
        }

    }

    return tabla

}


function buscaminas(){
    let cont = 0
    let fila_resultado = []
    let resultado = []

    let tablero = crear_tablero()

    // Tablero ya creado

    for (let i = 0; i < tablero.length; i++){
        for (let j = 0; j < tablero[i].length; j++){

            if (tablero[i][j] === "1"){
                cont = 1;
            }

            else{

                if (tablero[i-1] !== undefined){

                    // Vertical
                    if (tablero[i-1][j] === "1"){
                        cont++
                    }
    
                    // Diagonal
                    if ((tablero[i][j+1] !== undefined) && (tablero[i-1][j+1] == "1")){
                        cont++;
                    }
        
                    if ((tablero[i][j-1] !== undefined) && (tablero[i-1][j-1] == "1")){
                        cont++;
                    }
    
                }
    
                if (tablero[i+1] !== undefined){
    
                    // Vertical
                    if (tablero[i+1][j] == "1"){
                        cont++;
                    }
    
                    // Diagonal
                    if ((tablero[i][j+1] !== undefined) && (tablero[i+1][j+1] == "1")){
                        cont++;
                    }
    
                    if ((tablero[i][j-1] !== undefined) && (tablero[i+1][j-1] == "1")){
                        cont++;
                    }
    
                }
    
                // Horizontal
                if ((tablero[i][j+1] !== undefined) && (tablero[i][j+1] == "1")){
                    cont++;
                }
    
                if ((tablero[i][j-1] !== undefined) && (tablero[i][j-1] == "1")){
                    cont++;
                }

            }

            fila_resultado.push(cont)
            cont = 0

        }
        resultado.push(fila_resultado)
        fila_resultado = []

    }
    console.log(resultado)
    alert(resultado)
}

buscaminas()

/* 

['0', '1', '0', '0']
['0', '0', '1', '0']
['0', '0', '0', '0']
['1', '0', '0', '0']

RESULTADO

['1', '1', '2', '1']
['1', '2', '1', '1']
['1', '2', '1', '1']
['1', '1', '0', '0']

*/