class Aeropuerto{
    nombre;
    ciudad;
    num_vuelos_diarios;
}

class Vuelo{
    codigo;
    hora_llegada;
    hora_salida;

    constructor(codigo, hora_llegada, hora_salida){
        this.codigo = codigo;
        this.hora_llegada = hora_llegada;
        this.hora_salida = hora_salida;
    }

    get hora_llegada(){
        return this.hora_llegada;
    }

    get hora_salida(){
        return this.hora_salida;
    }

    set hora_llegada(hora_llegada){
        this.hora_llegada = hora_llegada;
    }    
    
    set hora_salida(hora_salida){
        this.hora_salida = this.hora_salida;
    }

    hora_correcta(){
        if (this.hora_llegada < this.hora_salida){
            console.log("La hora de llegada es menor a la hora de salida")
        } else {
            console.log("La hora de salida es menor a la hora de llegada")
        }
    }
}

let vuelo1 = new Vuelo(3, 22, 12);
vuelo1.hora_correcta();