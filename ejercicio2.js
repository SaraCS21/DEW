function actividad(){
    let cadena = prompt("Diga una cadena de binarios: ");
    let patron = prompt("Diga un patrón: ");
    const long_patron = patron.length
    let resultado = 0;
    let fallo = "Cadena mal introducida";

    if (cadena.length > 32 || cadena.length < long_patron){

        alert(fallo);
        return
    }

    for (let i=0; i < cadena.length; i++){

        if (cadena[i] !== "0" && cadena[i] !== "1"){
            
            alert(fallo);
            return
        }

        let comb = cadena.substring(i, i+long_patron);

        if (comb === patron){
            resultado += 1;
        }
    }
    
    alert(`Hay un total de ${resultado} coincidencias en el patrón.`);
}

actividad();

// 000101100111