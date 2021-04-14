function suma (x, y) {
    return x + y;
}

let numero = 5;
let caracter = 'frase';
let buleano = true;

// Funcion simple - ejecución
let resultadoSuma = suma(5,1);
// Asignar a una variable una funcion
let funcionSuma = suma;
// Ejecutar la función a través de la variable anterior
let resultadoSuma2 = funcionSuma(7,3);

console.log(`resultado funcion suma simple = ${resultadoSuma}`);
console.log(`variable funcionSuma = ${funcionSuma}`);
console.log(`resultado variable funcion suma = ${resultadoSuma2}`);


function multiplicacion (x, y) {
    return x * y;
}


function ejecutaOperacion (operacion, param1, param2) {
    return operacion(param1, param2);
}

console.log(`Ejecutar operacion SUMA = ${ejecutaOperacion(funcionSuma, 3, 3)}`)
console.log(`Ejecutar operacion MULT = ${ejecutaOperacion(multiplicacion, 4, 3)}`)
// ERROR típico, en vez de pasar por parámetro la función
// Lo que hago es INVOCAR a la función
// COMENTO ESTA LINEA: console.log(`Ejecutar operacion MULTIPLICACION = ${ejecutaOperacion(multiplicacion(4,3), 4, 3)}`)

// ESTA PARTE VA A FALLAR. Es sólo un ejemplo
// del uso que le damos en javascript a pasar funciones como parámetros
// COMENTO ESTA LINEA: boton.click(suma)

// FUNCIONES ANONIMAS
// Función anónima para dividir
let resultadoDivision = ejecutaOperacion(function (x, y) {
    return x / y;
}, 10, 5);


console.log(`Ejecutar operacion DIV = ${resultadoDivision}`)

// Ejemplo de función anónima cuando se hace un click de botón.
/** boton.click(function (event){

}); */

// Función anónima CON NOMBRE
let division = function (x, y) {
    return x / y;
}

// ESTO SERIA EQUIVALENTE A LO ANTERIOR
/** function division(x, y) {
    return x / y;
} */


console.log(`Ejecutar operacion DIV = ${division(6,1)}`)
console.log(`Ejecutar operacion DIV = ${division(15,5)}`)


// Función flecha ES LO MISMO que una anónima, pero con menos texto
function contactenarTextoConEspacio(t1, t2) {
    return t1 + ' ' + t2;
}

console.log(contactenarTextoConEspacio('Hola', 'Mundo'));

console.log(ejecutaOperacion(contactenarTextoConEspacio, 'Hola', 'Mundo'));

console.log(ejecutaOperacion(function (t1, t2) {
    return t1 + ' ' + t2;
}, 'Hola', 'Mundo'));

// FUNCION FLECHA donde se concatena dos textos
console.log(ejecutaOperacion((t1, t2) => t1 + ' ' + t2, 'Hola', 'Mundo'));



function ejecutaFuncion(operacion) {
    return operacion();
}

function suma3y2() {
    return 3+2;
}

console.log(ejecutaFuncion(suma3y2));

// FUNCION ANONIMA sin parametros
console.log(ejecutaFuncion(function () {
    return 2+3;
}))

console.log(ejecutaFuncion(() => 2+3));

function multipleOperacion (x, y) {
    let suma = x + y;
    let multiplicar = suma * x;
    let dividir = multiplicar / 2;

    return dividir;
}

console.log(multipleOperacion(3,3));

console.log(ejecutaOperacion(multipleOperacion,3,3));

console.log(ejecutaOperacion(function (x, y) {
    let suma = x + y;
    let multiplicar = suma * x;
    let dividir = multiplicar / 2;

    return dividir;
},3,3));


console.log(ejecutaOperacion((x, y) => {
    let suma = x + y;
    let multiplicar = suma * x;
    let dividir = multiplicar / 2;

    return dividir;
},3,3));

// EJEMPLO PRACTICO DE FUNCION ANONIMA / FLECHA
// Dado un array de numeros, quédate con los pares
function esPar(numero) {
    if ((numero % 2) == 0)
        return true;
    else
        return false;
}

function esParMejorada(numero) {
    return ((numero % 2) == 0);
}

const numeros=[5,8,10,11,12];
const numerosFiltrados = numeros.filter(esParMejorada);
console.log(numerosFiltrados);

// CON FUNCIONA ANONIMA
const numF = numeros.filter(function (numero) {
    return ((numero % 2) == 0);
}
);
console.log(numF);


// CON FUNCIONA FLECHA
const numF2 = numeros.filter((numero) => ((numero % 2) == 0));
console.log(numF2);
    