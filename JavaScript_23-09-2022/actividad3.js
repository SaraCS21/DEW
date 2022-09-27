const es_numero = (num) => !isNaN(num);

function crear_vector(){
    let continuar = "S";
    let vector = [];

    while (continuar === "S"){
        let num = prompt("Diga un número: ");

        if (es_numero(num)){
            vector.push(num);

            if (vector.length >= 5){
                continuar = prompt("¿Desea insertar un nuevo número? Pulse S: ").toUpperCase();
            }
        }

        else{
            alert("Valor no válido")
        }

    }
    return vector;
}
