/*
La función raiseToPower eleva una base a un exponente. Desafortunadamente, no se llama 
correctamente: corrige el código para que el valor de la potencia sea el número esperado.
*/

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);