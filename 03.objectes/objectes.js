// new Object();
const coche = new Object();
coche.numPuertas = 5;
coche.marca = 'Seat';
coche.esRojo = true;
coche.distancia = 100;
coche.tiempo = 1;
/**
coche.velocidad = function () {
    return this.distancia / this.tiempo;
}; */
coche.velocidad = () => (coche.distancia / coche.tiempo);


console.log(coche.marca);
console.log(coche.velocidad());


// Notació JSON;
let persona = {
    sexo: 'mujer',
    edad: 23,
    esMillonario: true,
    esMayorEdad: () => persona.edad > 18
};

console.log(persona.esMillonario);
console.log(persona.sexo);
persona.edad = 30;
console.log(persona.edad);
console.log(persona.esMayorEdad());


// Funció constructora
function Punto (coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.color = 'rojo';
    this.mostrarPunto = function () {
        console.log(this.x + ' ' + this.y);
    }
}

const puntoA = new Punto(30,80);
console.log(puntoA.x);
console.log(puntoA.y);
puntoA.mostrarPunto();
puntoA.color = 'amarillo';
console.log(puntoA.color);


const puntoB = new Punto(-10,20);
puntoB.mostrarPunto();
console.log(puntoB.color);
