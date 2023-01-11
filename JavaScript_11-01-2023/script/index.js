function dbCreate() {
    const dbInstance = openDatabase('rentCar', '1.0', 'Database rent a car', 2 * 1024 * 1024);
}

function dbCreateTableVehicle() {

    console.log ("Voy a la transacción ... ")
        dbInstance.transaction(function (tran) {
        console.log ("Creo la tabla")
        tran.executeSql('CREATE TABLE IF NOT EXISTS Users (id unique, Name, MailID)');
        
        console.log("Inserto los datos en la base")
        tran.executeSql('insert into Users (id, Name, MailID) values (1,"Jose Antonio Martin Medina","jantmarm@gmail.com")');
        tran.executeSql('insert into Users (id, Name, MailID) values (2, "Jesus Manuel Medina Cantalejo", "jmanmedc@canariaseducacion.com")');
        tran.executeSql('insert into Users (id, Name, MailID) values (3, "Ansu Fati Barsa Catalan","ansu.barcelona@gmail.com")');
    });
}