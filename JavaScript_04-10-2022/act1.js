function primo(num){
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}

function palindromo(num){
    let i_inverso = num.toString().split("").reverse().join("");

    if (num === parseInt(i_inverso)){
        return true
    }
    return false
}

function primos_palindromos(){
    resultado = []
    for (let i = 2; i <= 100000; i++){
        if (primo(i) && palindromo(i)){
            resultado.push(i)
        }
    }
    return resultado;
}

console.log(primos_palindromos());
