class Agenda_Tareas{
    #tareas = [];
    #tareas_finalizadas = [];

    get tareas(){
        return this.#tareas;
    }

    get tareas_finalizadas(){
        return this.#tareas_finalizadas;
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

    anadir_tarea_finalizada(nueva_tarea_finalizada){
        let existe = this.#tareas_finalizadas.some(function(tarea){
            return tarea.dia === nueva_tarea_finalizada.dia && tarea.hora === nueva_tarea_finalizada.hora
        });

        if (!existe){
            this.#tareas_finalizadas.push(nueva_tarea_finalizada);
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
        this.#tareas_finalizadas = this.#tareas.filter(tarea => tarea.dia < hoy.getDate() || (tarea.dia !== hoy.getDate() && tarea.dia < hoy.getHours()));
        this.#tareas = this.#tareas.filter(tarea => tarea.dia >= hoy.getDate() || (tarea.dia === hoy.getDate() && tarea.dia >= hoy.getHours()));
        console.log("Tareas eliminadas con éxito");
    };

    listar_tareas(){
        let tareas = [];
        this.#tareas = this.#tareas.sort(function compare(a, b){
            if ((a.dia < b.dia) || (a.dia === b.dia && a.hora < b.hora)){
                return -1;
            } else {
                return 0;
            };
        });

        for (let i = 0; i < this.#tareas.length; i++){
            tareas.push(this.#tareas[i]);
        };

        return tareas;
    };

    listar_tareas_finalizadas(){
        let tareas_finalizadas = [];
        this.#tareas_finalizadas = this.#tareas_finalizadas.sort(function compare(a, b){
            if ((a.dia < b.dia) || (a.dia === b.dia && a.hora < b.hora)){
                return -1;
            } else {
                return 0;
            };
        });

        for (let i = 0; i < this.#tareas_finalizadas.length; i++){
            tareas_finalizadas.push(this.#tareas_finalizadas[i]);
        };

        return tareas_finalizadas;
    };
}

export default Agenda_Tareas