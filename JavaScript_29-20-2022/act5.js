function potencia(){
    let base = parseInt(prompt("Diga la base: "))
    let exponente = parseInt(prompt("Diga el exponente: "))

    return `La potencia de ${base} elevado a ${exponente} es: ${Math.pow(base, exponente)}`;
};

function raiz(){
    let num = parseInt(prompt("Diga un número: "))

    return `La raíz cuadrada de ${num}: ${Math.sqrt(num)}`;
};

function redondeo(){
    let decimal = parseFloat(prompt("Diga un decimal: "))

    return `El redondeo de ${decimal} es: ${Math.round(decimal)}`;
};

function trigonometria(){
    let angulo = parseFloat(prompt("Diga un ángulo: "))

    if ((angulo > 360) || (angulo < 0)){
        return "Ángulo no válido"
    } else {
        return `El seno es: ${(Math.sin(angulo) * (Math.PI / 180))}\nEl coseno es: ${(Math.cos(angulo * (Math.PI / 180)))}\nLa tangente es: ${(Math.tan(angulo * (Math.PI / 180)))}}`
    }
}

function calculos(){
    let op = parseInt(prompt(`
                            Selecciona una de estas opciones:
                            1) Potencia
                            2) Raíz
                            3) Redondeo
                            4) Trigonometria`))

    switch (op){
        case 1: 
            return potencia();
        case 2: 
            return raiz();
        case 3: 
            return redondeo();
        case 4: 
            return trigonometria();
    }
};

alert(calculos());