// Esto es un comentario de una línea

/* Esto es un comentario
de varias
líneas. */

// ------------------------------------------------------------------------------------------------------

// Para ejecutar un JavaScript en consola usaremos en el terminal: node *nombre_archivo.js*

console.log("Hola mundo") // Mensaje para el usuario

// alert("Hola mundo") -> Solo se ejecuta en el cliente, se ve en la web como ventana emergente en el caso de HTML (no se recomienda hacer by Aitor)

// ------------------------------------------------------------------------------------------------------

// Podemos agrupar las impresiones por pantalla en grupos

console.group("Saludo")
    console.log("Hola")
    console.log("Hola")
    console.log("Hola")
    console.log("Hola")
console.groupEnd("Saludo")

// ------------------------------------------------------------------------------------------------------

// Variables, constantes y arrays

// * Variables

let variable1 = 1 // Esta variable solo es accesible dentro del bloque donde ha sido declarado "{  }"

var variable2 = 2 // Esta variable es accesible en cualquier función del código (no es recomendable)

variable3 = 3 // En caso de hacerlo así será equivalente a declararla con *var* (es menos recomendable aún)

function ejemplo(){
    ejemplo = 3;
    if (ejemplo === 3){
        var var1 = 1;
        let var2 = 2;
    }

    console.log(var1) // 1
    console.log(var2) // Undefined
}

// * Tipos de datos

// Numéricos (number): real (0.2, 2.1, 1.3) o entero (1, 4, -8)
// Enteros grandes
// ...

let edad = 23, nueva_edad, incremento = 4; // nueva_edad tendría el valor *undefined*

const nombre = "Rosa García"

console.log(typeof incremento === "number") // Con esto comprobamos el tipo de una variable
nueva_edad = edad + incremento

console.log(nombre + " tras " + incremento + " años tendrá " + nueva_edad) // Rosa García tras 4 años tendrá 27

// * Coerción

// Para cambiar el tipo de una variable por otro

let numero = 5;
console.log(numero) // Devuelve, de manera implícita, el *number* como un *string*

console.log(numero.toString()); // Modificamos el tipo del *numer* a tipo *string*

// ------------------------------------------------------------------------------------------------------

let a = "2", b = 5;
console.log(typeof a + " " + typeof b); // string number

console.log(a + b); // 25 (Los concadena porque no son del mismo tipo)

// Operador === / !== compara el tipo de dato y el valor ("5" no es igual a 5)

// Operador == / != solo compara el valor ("5" es igual a 5)

// En el caso de "15" < 100 -> dará como valor True porque JS lo cambia a tipo string

// ...

let altura;
console.log(altura ? true : false); // (Ternaria) Si se cumple "altura" entonces "True", sino "False" -> Como es "undefined" dará *false*

// * Arrays

// Se crean con [] o con "new Array()" -> Con la propiedad *length* podemos saber el número de elementos

let mi_vector = []; // let mi_vector = new Array();

mi_vector[0] = 22;
mi_vector[1] = 12;
mi_vector[2] = 33;

let otro_vector = [1, 2, "Hola"];

console.log(otro_vector[1]); // 2
console.log(otro_vector[2]); // "Hola"
console.log(mi_vector + " " + mi_vector.length); // [0, 1, 2] 3

// ...

// * Clonando arrays (y objetos)

// Para poder hacer una copia de arrays, solo unidimensionales, debemos hacerlo así:

let mi_vector = {...otro_vector};

// Para poder hacer copias de arrays multidireccionales:

let vector_multidireccional1 = JSON.parse(JSON.stringify(otro_vector_multidireccional));

// Otro método para hacer copias de arrays multidireccionales:

let vector_multidireccional2 = structuredClone(otro_vector_multidireccional);

// * Conversiones entre tipos

let num = "100";
let n = parseInt(num); // Pasa el valor a tipo *number*, en caso de haber parte decimal lo trunca

// parseFloat(num) // num.toString()

// * Constantes

// El valor de las constantes es invariable, solo son accesibles en el bloque en el que han sido declarados

const pi = 3.1416;

// Nunca definir arrays como constantes. Tratar de usar el mínimo número de constantes posibles (eso no es así, pero bueno by Aitor)

// * Método Estricto

// Si lo definimos fuera de una función afecta a todo el código, si lo definimos dentro solo afecta a esa función 

// Todas las varibles deben estar declarados

// ...

"use strict";
pi = 3.14;  // Da error porque no está definido con var o let por delante

// ------------------------------------------------------------------------------------------------------

pi = 3.14 

//function

// ...

// * Prompt

// Abre un cuadro de diálogo para pedirle al usuario algún dato

let provincia;
provincia = prompt("Introduzca la provincia", "Valencia") // "Valencia" sería el valor por defecto

// ...

// Estructuras de control

if (condicion){
    // Instrucciones
}

else if (condicion){
    // Instrucciones
}

else{
    // Instrucciones
}

// Bucles

for (iniciar_indice; condicion; incremento){
    // Instrucciones
}

// ...

// Do ... Whille ...

// Siempre se ejecuta como mínimo una vez, entra en el *do* y si la condición del while se cumple vuelve a ejecutar el *do*

do{
    // Instrucciones
} while (condicion);

// Algo del Break ...

// Funciones

function nombre (parametros){
    // Código
}