class Colegio{
    nombre;
    num_aulas;
    num_alumnos;
}

class Alumno{
    dni;
    nombre;
    nota_media;

    constructor(dni, nombre, nota_media){
        this.dni = dni;
        this.nombre = nombre;
        this.nota_media = nota_media;
        console.log(`Nota media: ${this.nota_media}`);
    }

    get nota_media(){
        return this.nota_media;
    }

    set nota_media(nota_media){
        this.nota_media = nota_media;
    }
}

let alumno1 = new Alumno("44112233D", "Juan", 6.2);
alumno1.nota_media = 8.2;
console.log(alumno1.nota_media);