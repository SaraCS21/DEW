const clase = {
    a: "hola",
    b: "adios",
    c: 23,
    d: function saludo(){
        return "buenas";
    }
}

const {a:f, b, c} = clase

console.log(Object.values(clase));

const letters = ["a", "b", "c", "d", "e", "f"]

letters.copyWithin(3,1);

console.log(letters)