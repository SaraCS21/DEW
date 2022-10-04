function mezcla_arrays(array1, array2){
    let resultado = []

    for (let i = 0; i <= array1.length - 1; i++){
        if (array2.find(e => e === array1[i]) === undefined){
            resultado.push(array1[i])
        }
    }

    for (let i = 0; i <= array2.length - 1; i++){
        if (array1.find(e => e === array2[i]) === undefined){
            resultado.push(array2[i])
        }
    }

    return resultado
}

console.log(mezcla_arrays([1, 2, 3], [3, 4, 5, 2]))