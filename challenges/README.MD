# Detecta los paréntesis abiertos y de cierre que faltan después del llamado de una función

Cuando una función o método no toma ningún argumento, puede olvidarse de incluir los paréntesis de apertura y cierre (vacíos) al llamarla. Muchas veces, el resultado del llamado de una función se guarda en una variable para otro uso en su código. Este error se puede detectar registrando los valores de las variables (o sus tipos) en la consola, y al ver que se imprime la referencia de la función, en lugar del valor esperado que devuelve la función.

Las variables en el siguiente ejemplo son diferentes:
``` Javascript
function myFunction () {
  return "You rock!";
}
let varOne = myFunction; // varOne es igual a la función
let varTwo = myFunction (); // varTwo se iguala al resultado de ejecutar la función
