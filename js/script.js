// variable global ¿?¿
var a = "a";

// se puede cambiar
let a1 = "a";

const a2 = "a";
console.log(a);
console.log(a1);
console.log(a2);

a = "otro valor";

// operadres: 
// aritmeticos: +,-,...
// logicos: || && !
// relaciones: <,>,>=... valor boolean
const x=10;
const esPar = x%2;

//saber el tipo
const tipoDeA = typeof a;
console.log(tipoDeA);

const esAlumno=true;
console.log(typeof esAlumno);

/* funcionaes */
function sumar () {
    console.log('sumar');
}

sumar1 = function (){
    console.log('sumar1');
}

// react + angular
sumar2 = () => {
    console.log('sumar2');
}

let valor = sumar ();
valor = sumar1();
valor = sumar2; //no ejecuta la funcion

valor();


// pasar funciones como parámetros
function x() {
    console.log('x');
}

function y(f) {
    console.log('y');
    f();
    if (f) {
        f();
    }
}

//sconst ry = y(sumar2);