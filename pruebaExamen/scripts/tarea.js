class Tarea{
    #dia;
    #hora;
    #lugar;
    #observaciones;
    #tipo;

    constructor(array){
        if (array[0] < 0 || array[0] > 31) throw new Error ("El dia debe estar entre 1 y 31");
        if (array[1] < 0 || array[1] > 23) throw new Error ("El hora debe estar entre 1 y 23");
        if (array[4] !== "reunion" && array[4] !== "medico" && array[4] !== "clases" && array[4] !== "gestiones varias") throw new Error ("El tipo de tarea es incorrecto");

        this.#dia = array[0];
        this.#hora = array[1];
        this.#lugar = array[2];
        this.#observaciones = array[3];
        this.#tipo = array[4];
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