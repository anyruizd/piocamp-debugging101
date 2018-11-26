/**
 * Se supone que la siguiente función crea un arreglo bidimensional con m filas y n columnas
 * de ceros. Desafortunadamente, no está produciendo el resultado esperado porque la 
 * variable de fila no se está reinicializando (se configura de nuevo en un arreglo vacío) 
 * en el bucle externo. Corrige el código para que devuelva un arreglo correcto de 
 * 3x2 de ceros, que se parece a [[0, 0], [0, 0], [0, 0]].
 */

function zeroArray(m, n) {
  // Crea una matriz 2-D con m filas yn columnas de ceros
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Agrega la fila m en newArray
    
    for (let j = 0; j < n; j++) {
      // Anñade los n ceros en la fila actual para crear las columnas
      row.push(0);
    }
    // Añade la fila actual, que ahora tiene n ceros en ella, al arreglo
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);