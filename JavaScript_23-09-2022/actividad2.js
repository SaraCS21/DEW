function lectura_espejo(){
    let cadena = prompt("Diga una cadena: ");
    let resultado = "";
    let linea = "-"

    resultado += linea.repeat(cadena.length + 7) + "\n|   "
    resultado += " ".repeat(cadena.length + 7) + " | \n|    "

    for (pos = cadena.length - 1; pos > -1; pos--){
        resultado += cadena[pos]
    }

    resultado += "    |\n| " + " ".repeat(cadena.length + 7) + "   | \n"
    resultado += linea.repeat(cadena.length + 7)

    alert(resultado)

}

lectura_espejo()