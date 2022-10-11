class Tarea{
    #dia;
    #hora;
    #lugar;
    #observaciones;
    #tipo;

    constructor(dia, hora, lugar, observaciones, tipo){
        if (dia < 0 || dia > 31) throw new Error ("El dia debe estar entre 1 y 31");
        if (hora < 0 || hora > 23) throw new Error ("El hora debe estar entre 1 y 23");
        if (tipo !== "reunion" && tipo !== "medico" && tipo !== "clases" && tipo !== "gestiones varias") throw new Error ("El tipo de tarea es incorrecto");

        this.#dia = dia;
        this.#hora = hora;
        this.#lugar = lugar;
        this.#observaciones = observaciones;
        this.#tipo = tipo;
    }

    get dia(){
        return this.#dia;
    };

    get hora(){
        return this.#hora;
    };

    set dia(nuevo_dia){
        this.#dia = nuevo_dia;
    };

    set hora(nuevo_hora){
        this.#hora = nuevo_hora;
    };

    mostrar_datos(){
        return `Dia: ${this.#dia}, Hora: ${this.#hora}, Lugar: ${this.#lugar}, Observaciones: ${this.#observaciones}, Tipo: ${this.#tipo}`;
    };
}

export default Tarea