function formatos_hora(valor) {
    const hora = new Date();

    if (valor === 1){
        return hora.toLocaleTimeString();
    } else if (valor === 2){
        return hora.toLocaleTimeString("en-US");
    };
};

console.log(formatos_hora(1));