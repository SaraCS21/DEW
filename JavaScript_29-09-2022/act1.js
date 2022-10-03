function dias_fin_curso(){
    const hoy = new Date();
    const hoy_milisegundos = hoy.getTime();
    const fin = new Date("2023/06/24");
    const fin_milisegundos = fin.getTime();

    const resultado_milisegundos = fin_milisegundos - hoy_milisegundos;
    const resultado = (resultado_milisegundos/86_400_000).toFixed();

    return `Quedan ${resultado} días para acabar el curso.`;
}

console.log(dias_fin_curso());