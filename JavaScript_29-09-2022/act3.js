function formatos_hoy(valor){
    const hoy = new Date();
    const opciones1 = {year: "numeric", month: "2-digit", day: "2-digit"}
    const opciones2 = {weekday: "long", year: "numeric", month: "short", day: "numeric"}
    let resultado = "";

    if (valor === 1){
        resultado = hoy.toLocaleDateString("es-ES", opciones1);
        // resultado = `${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()}`;
    } else if (valor === 2){
        resultado = hoy.toLocaleDateString("es-ES", opciones2);
    } else if (valor === 3){
        resultado = hoy.toLocaleDateString("en-US", opciones2);
    }

    return resultado;

};

console.log(formatos_hoy(1));