let validations = {
    "num": /\d+/,
    "letters": /[A-Za-zÁÉÍÓÚáéíóú]+/,
    "letter_space": /[A-Za-zÁÉÍÓÚáéíóú ]+/,
    "name_surname": /[A-Za-záéíóú' ]+/,
    "price": /\d+[.,{1}]\d{2}/,
    "num_ent_dec": /\d+[.{1}]\d+/,
    "num_pos_neg": /[-]?\d+/,
    "mil_dec": /(\d{0,3}[,]{1})*(\d{0,3})[.]{1}\d+/,
    "date": /(([1-9])|([1-2]\d)|(3[0-1]))\/(([1-9])|([1][0-2]))\/\d{4}/,
    "hour_12": /(([1][0-2])|\d):(([1-5]\d)|\d):(([1-5]\d)|\d)/,
    "hour_24": /(([2][0-4])|([1]\d)|\d):(([1-5]\d)|\d):(([1-5]\d)|\d)/,
    "password": /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{10,}/,
    "user_name": /[0-9a-z_-]{3, 16}/,
    "email": /[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}/,
    "url": /http[s]?:\/{2}(www.)?\w+[.][A-Za-z]{2,3}\/?/,
    "ipv4": /(((([2][0-4]\d)|(25[0-5]))|([1]\d{2})|\d{2}|\d)[.]){3}((([2][0-4]\d)|(25[0-5]))|([1]\d{2})|\d{2}|\d)/,
    "color": /[#][A-Fa_f\d]{3,6}/
}

let body = document.querySelector("body");
let result = "OK";

body.addEventListener(e => {
    let element = e.target;

    if (element.value === "validate"){
        let text = document.querySelector(".text");
        let select = document.querySelector("select");

        if (select.value === "num"){

        }
    }

})