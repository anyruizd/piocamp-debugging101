# Detecta el uso mixto de comillas simples y dobles
JavaScript permite el uso de comillas simples `('')` y dobles `("")` para declarar una cadena. Decidir cuál usar generalmente se reduce a las preferencias personales, con algunas excepciones.

Tener dos opciones es genial cuando una cadena tiene contracciones u otra pieza de texto entre comillas. Solamente ten cuidado de no cerrar la cadena demasiado pronto, lo que provoca un error de sintaxis.

Aquí hay algunos ejemplos del uso combinado de comillas:

``` Javascript
// Uso correcto:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// Uso incorrecto:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```
Por supuesto, está bien usar solo un estilo de comillas. Puedes 'escapar' las comillas dentro de la cadena usando el carácter de escape de barra invertida `(\)`:

``` Javascript
// Uso correcto de las mismas citas:
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```