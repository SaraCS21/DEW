const insertaNumero = () => {
    return new Promise((resolve, reject) => {

        // Pide al usuario que introduzca un número
        const numUsuario = Number(window.prompt("Introduce un número (1 - 6):"));

        // Elige un número aleatorio del 1 al 6
        const aleatorio = Math.floor(Math.random() * 6 + 1);

        // Si el usuario introduce un valor que no es un número, ejecuta reject con un error
        if (isNaN(numUsuario)) {
            reject(new Error("Tipo de entrada incorrecta"));
        }

        // Si el número del usuario coincide con el número aleatorio, retorna 2 puntos
        if (numUsuario === aleatorio) {
            resolve({
                puntos: 2,
                aleatorio,
            });
        } else if (numUsuario === aleatorio - 1 || numUsuario === aleatorio + 1) {
            // Si el número del usuario es diferente al número aleatorio por 1, retorna 1 punto
            resolve({
                puntos: 1,
                aleatorio,
            });
        } else {
            // Si no, retorna 0 puntos
            resolve({
                puntos: 0,
                aleatorio,
            });
        }
    });
};

const continuarJuego = () => {
    return new Promise((resolve) => {

        // Pregunta si el usuario quiere continuar el juego.
        if (window.confirm("¿Quieres continuar?")) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
};


// Crear gestionJuego

const gestionJuegoPromesas = (cont = 0) => {
    insertaNumero()
        .then(res => {
            cont += res["puntos"];
            let result = `Número obtenido: ${res["aleatorio"]}\nPuntos obtenidos: ${res["puntos"]}\nPuntuación total: ${cont}`;
            window.alert(result);

        }).then(() => continuarJuego()
        .then(res => {
            if(res){
                gestionJuego(cont);
            }
        }
        )).catch(error => console.log(error));
}

// gestionJuegoPromesas();

async function gestionJuegoAsync (cont = 0){
    try {
        const { puntos, aleatorio } = await insertaNumero();

        cont += puntos;
        let result = `Número obtenido: ${aleatorio}\nPuntos obtenidos: ${puntos}\nPuntuación total: ${cont}`;
        window.alert(result);
    
        if (await continuarJuego()){
            gestionJuegoAsync(cont)
        }
    } catch (error) {
        console.log(error);
    }
}

// gestionJuegoAsync();