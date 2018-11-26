/*
Corrige los dos errores de indexación en la siguiente función para que todos los números 
del 1 al 5 se impriman en la consola.
*/

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Arregla la línea de abajo
  for (let i = 1; i <= len; i++) {
  // No alteres el código debajo de esta línea
    console.log(firstFive[i]);
  }
}

countToFive();