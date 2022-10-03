function tamano(cadena){
    return cadena.split(" ").join("").length;
}

function nombre_separado(cadena){
    let array_nombre = cadena.split(" ");

    return `Nombre: ${array_nombre[0]}
            Apellido 1: ${array_nombre[1]}
            Apellido 2: ${array_nombre[2]}`

};

function nombre_usuario1(cadena){
    let array_nombre = cadena.split(" ");
    let nombre = array_nombre[0].toLowerCase();
    let apellido1 = array_nombre[1].toLowerCase();
    let apellido2 = array_nombre[2].toLowerCase();

    return `${nombre.substring(0,1)}${apellido1}${apellido2.substring(0,1)}`
}

function nombre_usuario2(cadena){
    let array_nombre = cadena.split(" ");
    let nombre = array_nombre[0].toLowerCase();
    let apellido1 = array_nombre[1].toLowerCase();
    let apellido2 = array_nombre[2].toLowerCase();

    return `${nombre.substring(0,3)}${apellido1.substring(0,3)}${apellido2.substring(0,3)}`
}

function nombre_apellidos(){
    let nombre = prompt("Diga su nombre y apellidos: ");

    return `
            Tamaño: ${tamano(nombre)}
            Minúsculas: ${nombre.toLowerCase()}
            Mayúsculas: ${nombre.toUpperCase()}
            ${nombre_separado(nombre)}
            ${nombre_usuario1(nombre)}
            ${nombre_usuario2(nombre)}`
}

alert(nombre_apellidos());