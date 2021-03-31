function operaciones(operacion, a, b) {
  return operacion(a, b);
}

function suma(x, y) {
  return x + y;
}

// Uso de funciones con nombre
console.log(operaciones(suma, 2, 1));

// Uso de funciones anonimas
const resultadoDiv = operaciones(
  function (p1, p2) {
    return p1 / p2;
  },
  10, 2);
console.log(resultadoDiv);

// Uso de funciones flecha
const resultadoMult = operaciones((m,n) => m*n, 4, 3);
console.log(resultadoMult);
  