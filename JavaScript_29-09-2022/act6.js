function op_diametro(radio){
    return radio * 2;
}

function perimetro(diametro){
    return Math.PI * diametro;
}

function area_circulo(radio){
    return Math.PI * (radio ** 2);
}

function area_esfera(radio){
    return 4 * Math.PI * (radio ** 2);
}

function volumen(radio){
    return (4/3) * Math.PI * (radio ** 3);
}

function datos_radio(){
    let radio = parseFloat(prompt("Diga un radio: "));
    let diametro = op_diametro(radio);

    return `${radio} cm / ${diametro} cm / ${perimetro(diametro)} cm / ${area_circulo(radio)} cm2 / ${area_esfera(radio)} cm2 / ${volumen(radio)} cm3`;
}

alert(datos_radio());