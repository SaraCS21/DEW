function array_raices(num1, num2){
    let resultado = [];
    for (let i = num1; i < num2; i++){
        resultado.push(Math.sqrt(i))
    }
    return resultado;
}

console.log(array_raices(1, 9));