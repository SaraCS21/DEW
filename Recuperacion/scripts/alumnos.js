class Clases{
    #dam = [];
    #dew = [];

    get dam(){
        return this.#dam;
    }

    get dew(){
        return this.#dew;
    }

    anadir_alumno_dam(alumno){
        this.#dam.push(alumno);
    };

    anadir_alumno_dew(alumno){
        this.#dew.push(alumno);
    };

    mover_alumno_a_dew(nombre_alumno){
        this.#dam.forEach(alumno => {
            if (alumno.name === nombre_alumno && alumno.cambio === 1){
                this.#dam = this.#dam.filter(a => a !== alumno);
                this.#dew.push(alumno);
                alumno.modificar_cambio();
            }
        })

        console.log(this.#dam);
        console.log(this.#dew);
    }

    mover_alumno_a_dam(nombre_alumno){
        this.#dew.forEach(alumno => {
            if (alumno.name === nombre_alumno && alumno.cambio === 1){
                this.#dew = this.#dew.filter(a => a !== alumno);
                this.#dam.push(alumno);
                alumno.modificar_cambio();
            }
        })
    }

    ordenar_dam(ordenacion){

        if (ordenacion === "name"){
            this.#dam = this.#dam.sort(function compare(a, b){
                if ((a.name < b.name)){
                    return -1;
                } else {
                    return 0;
                };
            });

        } else if (ordenacion === "surname_asc"){
            this.#dam = this.#dam.sort(function compare(a, b){
                if ((a.surname < b.surname)){
                    return -1;
                } else {
                    return 0;
                };
            });

        } else if (ordenacion === "surname_desc"){
            this.#dam = this.#dam.sort(function compare(a, b){
                if ((a.surname > b.surname)){
                    return -1;
                } else {
                    return 0;
                };
            });
            
        } else if (ordenacion === "date_asc"){
            this.#dam = this.#dam.sort(function compare(a, b){

                let a_date = a.date.split("/");
                let b_date = b.date.split("/");

                if (a_date[2] < b_date[2] || (a_date[2] === b_date[2] && a_date[1] < b_date[1]) || (a_date[2] === b_date[2] && a_date[1] === b_date[1] && a_date[0] < b_date[0])){
                    return -1;

                } else {
                    return 0;
                };
            });
            
        } else if (ordenacion === "date_desc"){
            this.#dam = this.#dam.sort(function compare(a, b){

                let a_date = a.date.split("/");
                let b_date = b.date.split("/");

                if (a_date[2] > b_date[2] || (a_date[2] === b_date[2] && a_date[1] > b_date[1]) || (a_date[2] === b_date[2] && a_date[1] === b_date[1] && a_date[0] > b_date[0])){
                    return -1;

                } else {
                    return 0;
                };
            });
        }
    }

    ordenar_dew(ordenacion){

        if (ordenacion === "name"){
            this.#dew = this.#dew.sort(function compare(a, b){
                if ((a.name < b.name)){
                    return -1;
                } else {
                    return 0;
                };
            });

        } else if (ordenacion === "surname_asc"){
            this.#dew = this.#dew.sort(function compare(a, b){
                if ((a.surname < b.surname)){
                    return -1;
                } else {
                    return 0;
                };
            });

        } else if (ordenacion === "surname_desc"){
            this.#dew = this.#dew.sort(function compare(a, b){
                if ((a.surname > b.surname)){
                    return -1;
                } else {
                    return 0;
                };
            });
            
        } else if (ordenacion === "date_asc"){
            this.#dew = this.#dew.sort(function compare(a, b){

                let a_date = a.date.split("/");
                let b_date = b.date.split("/");

                if (a_date[2] < b_date[2] || (a_date[2] === b_date[2] && a_date[1] < b_date[1]) || (a_date[2] === b_date[2] && a_date[1] === b_date[1] && a_date[0] < b_date[0])){
                    return -1;

                } else {
                    return 0;
                };
            });
            
        } else if (ordenacion === "date_desc"){
            this.#dew = this.#dew.sort(function compare(a, b){

                let a_date = a.date.split("/");
                let b_date = b.date.split("/");

                if (a_date[2] > b_date[2] || (a_date[2] === b_date[2] && a_date[1] > b_date[1]) || (a_date[2] === b_date[2] && a_date[1] === b_date[1] && a_date[0] > b_date[0])){
                    return -1;

                } else {
                    return 0;
                };
            });
        }
    }
}

class Alumno{
    #name;
    #surname;
    #date;
    #image;
    #cambio = 1;

    constructor(name, surname, date, image){
        this.#name = name;
        this.#surname = surname;
        this.#date = date;
        this.#image = image;
    }

    get name(){
        return this.#name;
    }

    get surname(){
        return this.#surname;
    }

    get date(){
        return this.#date;
    }

    get image(){
        return this.#image;
    }

    get cambio(){
        return this.#cambio;
    }

    modificar_cambio() {
        this.#cambio = 0;
    }
}

let clases = new Clases();

let al1 = new Alumno("Jesús", "Suárez Perdomo", "12/01/2001", "./img/alumno1.png")
let al2 = new Alumno("Ángel", "Santana Reyes", "10/10/2002", "./img/alumno2.png")
let al3 = new Alumno("Octavio", "Martín Santana", "11/06/2003", "./img/alumno3.png")
let al4 = new Alumno("Ana", "García Alemán", "06/03/2001", "./img/alumna1.png")
let al5 = new Alumno("María", "Luisa García", "02/02/2001", "./img/alumna2.png")

clases.anadir_alumno_dam(al1);
clases.anadir_alumno_dam(al2);
clases.anadir_alumno_dam(al3);
clases.anadir_alumno_dam(al4);
clases.anadir_alumno_dam(al5);

let al6 = new Alumno("Lourdes", "Santana Pérez", "16/09/2001", "./img/alumna3.png")
let al7 = new Alumno("Jose Javier", "Santana Castellano", "14/04/2000", "./img/alumno4.png")
let al8 = new Alumno("Rafael", "Roca Santana", "26/05/2000", "./img/alumno5.png")
let al9 = new Alumno("Jaime", "Pérez Pérez", "27/08/2001", "./img/alumno6.png")
let al10 = new Alumno("Pilar", "Medina Jiménez", "01/11/2003", "./img/alumna4.png")

clases.anadir_alumno_dew(al6);
clases.anadir_alumno_dew(al7);
clases.anadir_alumno_dew(al8);
clases.anadir_alumno_dew(al9);
clases.anadir_alumno_dew(al10);

export {
    clases
}