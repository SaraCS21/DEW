function actividad(){
    let cadena = prompt("Diga una cadena de binarios: ");
    let resultado = 0;
    let fallo = "Cadena mal introducida";

    if (cadena.length !== 12){

        alert(fallo);
        return
    }

    for (let i=0; i < cadena.length; i++){

        if (cadena[i] !== "0" && cadena[i] !== "1"){
            
            alert(fallo);
            return
        }

        let comb1 = cadena[i] + cadena[i+1];
        let comb2 = cadena[i] + cadena[i+1] + cadena[i+2];

        if (comb1 === "00" || comb2 === "101" || comb2 === "111"){
            resultado += 1;
        }
    }
    
    alert(`Hay un total de ${resultado} coincidencias en el patrón.`);
}

actividad();

// 000101100111