class Agenda_Tareas{
    #tareas = [];

    get tareas(){
        return this.#tareas;
    }

    anadir_tarea(nueva_tarea){
        let existe = this.#tareas.some(function(tarea){
            return tarea.dia === nueva_tarea.dia && tarea.hora === nueva_tarea.hora
        });

        if (!existe){
            this.#tareas.push(nueva_tarea);
            console.log("Tarea añadida con éxito! :D")
        } else {
            console.log("Ya hay una tarea asignada para el mismo dia a la misma hora.")
        };
    };

    eliminar_tarea(dia, hora){
        this.#tareas = this.#tareas.filter(tarea => !(tarea.dia === dia && tarea.hora === hora));
        console.log("Tarea eliminada con éxito");
    };

    eliminar_tareas_realizadas(){
        let hoy = new Date()
        this.#tareas = this.#tareas.filter(tarea => tarea.dia >= hoy.getDate() || (tarea.dia === hoy.getDate() && tarea.dia >= hoy.getHours()));
        console.log("Tareas eliminadas con éxito");
    };

    listar_tareas(){
        this.#tareas = this.#tareas.sort(function compare(a, b){
            if ((a.dia < b.dia) || (a.dia === b.dia && a.hora < b.hora)){
                return -1;
            } else {
                return 0;
            };
        });

        for (let i = 0; i < this.#tareas.length; i++){
            console.log(this.#tareas[i].mostrar_datos());
        };
    };
}

export default Agenda_Tareas