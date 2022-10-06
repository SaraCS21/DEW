// Declaración de clases
class Animal {};

const perro = new Animal();

// Propiedades y métodos

class Animal{
    //Propiedades
    nombre = "Perry";
    tipo = "Ornitorrinco";

    // Métodos
    investigar(){
        return "Prrrr";
    };
}

// Podemos definir una propiedad como privada poniéndole un # delante
// Podemos usar this para hacer referencia al propio objeto
class Animal{
    //Propiedades
    #nombre = "Perry";
    #tipo = "Ornitorrinco";

    // Métodos
    cancioncita(){
        return `Es ${this.#nombre} el ${this.#tipo}`;
    };
}

//Podemos definir las propiedades en un constructor

class Animal{
    //Propiedades
    constructor(){
        this.#nombre = "Perry";
        this.#tipo = "Ornitorrinco";
    };
};

// El getter sirve para obetener valores, se define como:
// El setter sirve para definir valores, se define como:

class Animal{
    //Propiedades
    constructor(){
        this.#nombre = "Perry";
        this.#tipo = "Ornitorrinco";
    };

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }
};

const perry = new Animal();
perry.nombre = "Manolo";

// HERENCIA

// La clase hija obtiene las propiedades y métodos de la clase padre a través de extends

class padre{
    constructor(){
        console.log("holi")
    }
}

class hija extends padre{
    constructor(){
        super();
        console.log("adeu")
    }
}