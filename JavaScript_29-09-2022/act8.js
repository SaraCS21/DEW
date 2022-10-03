function comprobar_contrasena(){
    let contr = prompt("Diga su contraseña: ")
    let segura = true;

    if ((contr.length < 8) || (contr.length > 16)){
        segura = false;
    } 
    else if ((!/[a-z]/.test(contr)) && (!/[A-Z]/.test(contr))){
        segura = false;
    } 
    else if (!/[0-9]/.test(contr)){
        segura = false;
    } 
    else if (!/[_$%&#-]/.test(contr)){
        segura = false;
    }

    if (segura){
        return "Contraseña válida";
    } else {
        return "Contraseña no válida"
    }

}

alert(comprobar_contrasena());