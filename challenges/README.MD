# Detecta el uso del operador de asignación en lugar del operador de igualdad

Los programas de ramificación, es decir, los que hacen cosas diferentes si se cumplen ciertas condiciones, se basan en las declaraciones `if`, `else if`, y `else` en JavaScript. La condición a veces se usa para probar si un resultado es igual a un valor.

Esta lógica se habla (en inglés, al menos) como "si x es igual a y, entonces ..." que puede traducirse literalmente en código usando el operador =, o asignación. Esto conduce a un flujo de control inesperado en tu programa.

Como recorderis, el operador de asignación `(=)` en JavaScript asigna un valor a un nombre de variable. Y los operadores `==` y `===` verifican la igualdad (los triples `===` prueban la igualdad estricta, lo que significa que tanto el valor como el tipo son iguales).

El siguiente código asigna `2` a la variable `x`, que se evalúa como verdadero. Casi todos los valores en JavaScript se evalúan como verdaderos, excepto lo que se conoce como valores "falsy": `false`, `0`, `""` (una cadena vacía), `NaN`, `undefined` y `null`.

``` Javascript
let ​​x = 1;
let ​​y = 2;
if (x = y) {
  // este bloque de código se ejecutará para cualquier valor de y (a menos que y se haya establecido originalmente como falsy)
} else {
  // este bloque de código es lo que debería ejecutarse (pero no lo hará) en este ejemplo
}
```