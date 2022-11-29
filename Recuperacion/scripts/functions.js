function tabla_dam(dam, tbody, table, h1){

    table.classList.remove('d-none');
    table.classList.remove('dew');
    table.classList.add('dam');
    tbody.innerHTML = "";
    h1.innerHTML = "Tabla DAM";

    dam.forEach(alumno => {
        let tr = document.createElement("tr");

        let td_name = document.createElement("td");
        td_name.innerHTML = alumno.name;
        tr.append(td_name);
        
        let td_surname = document.createElement("td");
        td_surname.innerHTML = alumno.surname;
        tr.append(td_surname);

        let td_date = document.createElement("td");
        td_date.innerHTML = alumno.date;
        tr.append(td_date);

        let td_image = document.createElement("td");
        let img = document.createElement("img");
        img.src = alumno.image;
        img.className = "w-25 rounded-circle";
        td_image.append(img);
        tr.append(td_image);

        if (alumno.cambio === 1){
            let input_check = document.createElement("input");
            let td_check = document.createElement("td");
    
            input_check.setAttribute("type", "checkbox");
            input_check.setAttribute("name", "cambio");
            input_check.setAttribute("id", alumno.name);
            input_check.className = "dam form-check-input";
    
            td_check.append(input_check);
            tr.append(td_check);

        } else {
            let td = document.createElement("td");
            td.innerHTML = "";
            tr.append(td);
        }

        let input_falta = document.createElement("input");
        let td_falta = document.createElement("td");

        input_falta.setAttribute("type", "checkbox");
        input_falta.className = "form-check-input";

        td_falta.append(input_falta);
        tr.append(td_falta);
        
        tbody.append(tr);
    })
}

function tabla_dew(dew, tbody, table, h1){
    table.classList.remove('d-none');
    table.classList.remove('dam');
    table.classList.add('dew');
    tbody.innerHTML = "";
    h1.innerHTML = "Tabla DEW";

    dew.forEach(alumno => {
        let tr = document.createElement("tr");

        let td_name = document.createElement("td");
        td_name.innerHTML = alumno.name;
        tr.append(td_name);
        
        let td_surname = document.createElement("td");
        td_surname.innerHTML = alumno.surname;
        tr.append(td_surname);

        let td_date = document.createElement("td");
        td_date.innerHTML = alumno.date;
        tr.append(td_date);

        let td_image = document.createElement("td");
        let img = document.createElement("img");
        img.src = alumno.image;
        img.className = "w-25 rounded-circle";
        td_image.append(img);
        tr.append(td_image);

        if (alumno.cambio === 1){
            let input_check = document.createElement("input");
            let td_check = document.createElement("td");
    
            input_check.setAttribute("type", "checkbox");
            input_check.setAttribute("name", "cambio");
            input_check.setAttribute("id", alumno.name);
            input_check.className = "dew form-check-input";
    
            td_check.append(input_check);
            tr.append(td_check);

        } else {
            let td = document.createElement("td");
            td.innerHTML = "";
            tr.append(td);
        }

        let input_falta = document.createElement("input");
        let td_falta = document.createElement("td");

        input_falta.setAttribute("type", "checkbox");
        input_falta.className = "form-check-input";

        td_falta.append(input_falta);
        tr.append(td_falta);

        tbody.append(tr);
    })
}

export {
    tabla_dam,
    tabla_dew
}