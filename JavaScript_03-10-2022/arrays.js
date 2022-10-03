// Número de elementos del array.
const num_elementos = array => array.length;

// Mostrar elementos del array
const mostrar_elementos = (array) => array.join(", ");

// Mostrar elementos del array sentido inverso
const mostrar_elementos_inverso = (array) => array.reverse().join(", ");

// Mostrar elementos ordenados alfabéticamente
const mostrar_alfabeticamente = (array) => array.sort().join(", ");

// Añade un elemento al principio
const anadir_principio = (array, valor) => array.unshift(valor);

// Añade un elemento al final
const anadir_final = (array, valor) => array.push(valor);

// Eliminar al principio
const eliminar_principio = array => array.shift();

// Eliminar al final
const eliminar_final = array => array.pop();

// Mostrar elemento por posición
const mostrar_elemento = (array, pos) => array[pos];

// Mostrar posición de elemento
const mostrar_posicion = (array, elemento) => array.indexOf(elemento);

// Mostrar elementos en un intervalo
const mostrar_intervalo = (array, inicio, fin) => array.slice(inicio, fin)
