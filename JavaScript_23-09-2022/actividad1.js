function recuento_vocales(){
    let cadena = prompt("Diga una cadena: ");
    let a = 0, e = 0, i = 0, o = 0, u = 0

    for (pos = 0; pos <= cadena.length; pos++){

        switch(cadena[pos]){
            case "a":
                a++;
                break;
            case "e":
                e++;
                break;
            case "i":
                i++;
                break;
            case "o":
                o++;
                break;
            case "u":
                u++;
                break;
        }

    }

    alert(`Hay un total de:\n - ${a} a\n - ${e} e\n - ${i} i\n - ${o} o\n - ${u} u`)
}

recuento_vocales()