let paises = [
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
            resultado = `Número de elementos ${num_elementos(paises)}`;
            break;
            
        case 2: 
            const orden = parseInt(prompt(`
            1.- Mostrar en el orden original
            2.- Mostrar en el orden inverso
            3.- Mostrar en orden alfabético
            `));

            switch (orden) {
                case 1:
                    resultado = `Orden original \n${mostrar_elementos(paises)}`;
                    break;
                case 2:
                    resultado = `Orden inverso \n${mostrar_elementos_inverso(paises)}`;
                    break;
                case 3:
                    resultado = `Odenar alfabeticamente \n${mostrar_alfabeticamente(paises)}`;
                    break;
                default:
                    resultado = "El valor introducido no es válido"
                    break;
            };
            break;

        case 3:
            let inicio = parseInt(prompt("Diga un valor de inicio:"));
            let fin = parseInt(prompt("Diga un valor de fin:"));

            resultado = `Intervalo \n${mostrar_intervalo(paises, inicio, fin)}`;
            break;

        case 4:
            let nuevo_pais = parseInt(prompt("Diga el nuevo país:"));
            const anadir = parseInt(prompt(`
            1.- Añadir al principio
            2.- Añadir al final
            `));

            switch (anadir) {
                case 1:
                    resultado = `Añadir elemento principio ${anadir_principio(paises, nuevo_pais)}`;
                    break;
                case 2:
                    resultado = `Añadir elemento final ${anadir_final(paises, nuevo_pais)}`;
                    break;
                default:
                    resultado = "El valor introducido no es válido";
                    break;
            };
            break;

        case 5:
            const eliminar = parseInt(prompt(`
            1.- Eliminar al principio
            2.- Eliminar al final
            `));

            switch (eliminar) {
                case 1:
                    resultado = `Eliminar elemento principio ${eliminar_principio(paises)}`;
                    break;
                case 2:
                    resultado = `Eliminar elemento final ${eliminar_final(paises)}`;
                    break;
                default:
                    resultado = "El valor introducido no es válido"
                    break;
            };
            break;

        case 6:
            const consulta = parseInt(prompt(`
            1.- Consultar por posición
            2.- Consultar por nombre
            `));

            switch (consulta) {
                case 1:
                    let pos = parseInt(prompt("Diga la posición que quieres consultar:"));
                    resultado = `Posición ${mostrar_elemento(paises, pos)}`;
                    break;
                case 2:
                    let pais = prompt("Diga el país que quieres consultar:");
                    resultado = `Nombre ${mostrar_posicion(paises, pais)}`;
                    break;
                default:
                    resultado = "El valor introducido no es válido"
                    break;
            };
            break;
    }

    return resultado;

}

alert(opciones(paises))