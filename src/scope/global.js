// variables

var a; //declarando
var b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignación
var a = 'aa' //redeclaración

// Global scope
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit()

// Global scope sin declarar
function countries() {
    country = 'Colombia' // Si no se declara, sería scope global
    console.log(country)
}

countries()
console.log(country)