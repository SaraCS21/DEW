function domingos_cumple(mes, dia){
    const año_actual = new Date().getFullYear();
    let domingos = [];

    for (año = año_actual; año <= 2100; año++){
        let fecha_cumple = new Date(año, mes, dia);

        if(fecha_cumple.getDay() === 0){
            domingos.push(fecha_cumple.getFullYear());
        };
    };

    return domingos;

}

console.log(domingos_cumple(9, 22));