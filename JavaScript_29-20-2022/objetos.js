// Creación de un objeto

const objeto = {
    nombre: "Sara",
    edad: 22
};

// Acceder a clases

objeto.nombre; // Sara
objeto.edad;   // 22

objeto["nombre"];  // Sara
objeto["edad"];    // 22

// Otra forma de crear objetos

const objeto2 = {};

objeto2.dia = 29;
objeto2["mes"] = 09;
objeto2.año = 2022;

// Heredan el toString

// Podemos crear nuestro método toString

const objeto3 = {
    nombre: "Sara",
    edad: 22,
    toString: function(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`
    }
};

// ... un print o algo asi

// JSON

const json = {
    "nombre": "Sara",
    "vida": 3,
    "vida_total": 6,
    "propiedades": ["invisibilidad", "fuerza"],
    "muerto": false,
    "sentidos": {
        "vision": 50,
        "vista": 80
    },
    "funcion": function hola(){
        return "Hola";
    }
};

// ... métodos

// JSON.parse(); -> 

const usuario = JSON.parse(json);

usuario.nombre;  // "Sara"

// JSON.stringfy(); -> devuelve el json todo junto y no muestra las funciones

JSON.stringify(json);  // {"nombre":"Sara","vida":3...} 

// Podemos filtrar que es lo que queremos que nos muetre

JSON.stringify(json, ["nombre"]);  // {"nombre":"Sara"}

// Le podemos indicar las indentaciones que queramos que ocupe

JSON.stringify(json, ["nombre","vida"], 4);

/* 

1    {
2        "nombre":"Sara",
3        "vida":22
4    }

*/

// OBJETOS NATIVOS

// Date

var fecha = new Date();

// ... Métodos ...

// Math

var pi = Math.PI;
var x = Math.sqrt(2);  // Devuelve el cuadrado de un numero

// Diferentes funciones...

// Number -> no se suele usar, se suele inicializar una variable como número de manera normal

var num = new Number(5);

// Metodos ...

// Boolean

// ...

// String

var texto1 = new String("Hola");
var texto2 = "Adiós";

// Métodos ...
