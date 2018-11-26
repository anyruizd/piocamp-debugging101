# Utiliza `typeof` para comprobar el tipo de una variable

Puedes usar `typeof` para verificar la estructura de datos, o tipo, de una variable. Esto es útil en la depuración cuando se trabaja con múltiples tipos de datos. Si crees que estás agregando dos números, pero uno es en realidad una cadena, los resultados pueden ser inesperados. Los errores de tipo pueden estar al acecho en cálculos o llamadas de una función. Tenga cuidado, especialmente cuando accede y trabaja con datos externos en forma de un objeto de notación de objetos de JavaScript (JSON).

Aquí hay algunos ejemplos usando typeof:
``` Javascript
  console.log (typeof ""); // salidas "cadena"
  console.log (typeof 0); // salidas "número"
  console.log (typeof []); // salidas "objeto"
  console.log (typeof {}); // salidas "objeto"

``
JavaScript reconoce seis tipos de datos primitivos (inmutables): booleano, nulo, undefined, número, cadena y símbolo (nuevo con ES6) y un tipo para elementos mutables: objeto. Tenga en cuenta que en JavaScript, las matrices son técnicamente un tipo de objeto.