function elementos_unicos(array1, array2){
    let nuevo_array = array1.concat(array2);
    nuevo_array = new Set(nuevo_array);
    return [...nuevo_array];
}

console.log(elementos_unicos([1, 2, 3], [3, 4, 5, 2]))