paises = [
    "España", "Alemania", "Italia", "Francia", "Reino Unido",
    "Holanda", "Rusia", "Noruega", "Uruguay", "Estados Unidos",
    "Malasia", "Brasil", "Argentina", "Chile", "Colombia"
];

function opciones(paises) {
    let opcion = parseInt(prompt(`
    1.- Mostrar número de países
    2.- Mostrar listado de países
    3.- Mostrar intervalo de países
    4.- Añadir un país
    5.- Borrar un país
    6.- Consultar un país
    `));

    let resultado = "";

    switch (opcion) {

        case 1:
            resultado = num_elementos(paises);
        case 2: 
            const orden = parseInt(prompt(`
            1.- Mostrar en el orden original
            2.- Mostrar en el orden inverso
            3.- Mostrar en orden alfabético
            `));

            switch (orden) {
                case 1:
                    resultado = mostrar_elementos(paises);
                case 2:
                    resultado = mostrar_elementos_inverso(paises);
                case 3:
                    resultado = mostrar_alfabeticamente(paises);
                default:
                    resultado = "El valor introducido no es válido"
            };

        case 3:
            let inicio = parseInt(prompt("Diga un valor de inicio:"));
            let fin = parseInt(prompt("Diga un valor de fin:"));

            resultado = mostrar_intervalo(paises, inicio, fin);

        case 4:
            let nuevo_pais = parseInt(prompt("Diga el nuevo país:"));
            const anadir = parseInt(prompt(`
            1.- Añadir al principio
            2.- Añadir al final
            `));

            switch (anadir) {
                case 1:
                    resultado = anadir_principio(paises, nuevo_pais);
                case 2:
                    resultado = anadir_final(paises, nuevo_pais);
                default:
                    resultado = "El valor introducido no es válido";
            };

        case 5:
            const eliminar = parseInt(prompt(`
            1.- Eliminar al principio
            2.- Eliminar al final
            `));

            switch (eliminar) {
                case 1:
                    resultado = eliminar_principio(paises);
                case 2:
                    resultado = eliminar_final(paises);
                default:
                    resultado = "El valor introducido no es válido"
            };

        case 6:
            const consulta = parseInt(prompt(`
            1.- Consultar por posición
            2.- Consultar por nombre
            `));

            switch (pos1) {
                case 1:
                    let pos = parseInt(prompt("Diga la posición que quieres consultar:"));
                    resultado = mostrar_elemento(paises, pos);
                case 2:
                    let pais = parseInt(prompt("Diga el país que quieres consultar:"));
                    resultado = mostrar_posicion(paises, pais);
                default:
                    resultado = "El valor introducido no es válido"
            };
    }

    return resultado;

}

alert(opciones(paises))