class Hospital{
    nombre;
    ciudad;
    num_pacientes;

    constructor(nombre, ciudad, num_pacientes = 0){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.num_pacientes = num_pacientes;
    }

    get num_pacientes(){
        return this.num_pacientes;
    }

    eliminar_paciente(dni){
        this.num_pacientes = this.num_pacientes.filter(paciente => paciente.dni !== dni);
    }
}

class Paciente{
    dni;
    nombre;
    enfermedad;

    constructor(dni, nombre, enfermedad){
        this.dni = dni;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }
}

let paciente1 = new Paciente("123456D", "Pepe", "Cancer");
let paciente2 = new Paciente("123456S", "Laura", "Tos");

let hospital = new Hospital("Negrin", "LPGC", [paciente1, paciente2])

console.log(hospital.num_pacientes);
hospital.eliminar_paciente("123456D");
console.log(hospital.num_pacientes);