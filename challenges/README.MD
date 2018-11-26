# Descubre errores off-by-one al utilizar la indexación

Los errores off-by-one (a veces llamado OBOE o error por uno) se presentant cuando intentas apuntar a un índice específico de una cadena o arreglo (para dividir o acceder a un segmento), o cuando se recorren los índices de ellos. La indexación de JavaScript comienza en cero, no en uno, lo que significa que el último índice siempre es uno menos que la longitud del elemento. Si intentas acceder a un índice igual a la longitud, el programa puede arrojar un error de referencia de "índice fuera de rango" o imprimir sin `undefined`.

Cuando utilizas métodos de cadena o arreglos que toman los rangos de los índices como argumentos, es útil leer la documentación y comprender si son inclusivos (el elemento en el índice dado es parte de lo que se devuelve) o no. Aquí hay algunos ejemplos de errores off-by-one:

``` Javascript
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len ​​= alphabet.length;
for (let i = 0; i <= len; i ++) {
  // Se repite demasiadas veces al final
  console.log (alphabet[i]);
}
for (let j = 1; j <len; j ++) {
  // Se repite muy pocas veces y se pierde el primer carácter en el índice 0
  console.log (alphabet[j]);
}
for (let k = 0; k <len; k ++) {
  // Ricitos de oro aprueba esto -  es correcto
  console.log (alphabet[k]);
}