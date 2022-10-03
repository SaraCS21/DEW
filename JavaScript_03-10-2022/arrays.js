// Número de elementos del array.
const num_elementos = array => array.length;

// Mostrar elementos del array
const mostrar_elementos = (array) => array.join(", ");

// Mostrar elementos del array sentido inverso
const mostrar_elementos_inverso = (array) => array.reverse().join(", ");

array = ["a", 2, "b", 5];
console.log(mostrar_elementos_inverso(array));

// Mostrar elementos ordenados alfabéticamente
// const mostrar_alfabeticamente = (array) => array.sort().forEach(elemento => console.log(elemento));
function mostrar_alfabeticamente(array){

}

// Añade un elemento al principio
const anadir_principio = (array, valor) => array.unshift(valor);

// Añade un elemento al final
const anadir_final = (array, valor) => array.push(valor);

// Eliminar al principio (Falta mostrarlo)
const eliminar_principio = array => array.shift();

// Eliminar al final (Falta mostrarlo)
const eliminar_final = array => array.pop();

