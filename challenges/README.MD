# Detecta paréntesis, corchetes, llaves y comillas sin cerrar

Otro error de sintaxis a tener en cuenta es que todos los paréntesis de apertura, corchetes,llaves y comillas tienen un par de cierre. El olvido de una pieza suele suceder cuando se edita el código existente y se inserta elementos con uno de los tipos de pares. Además, ten cuidado al anidar bloques de código dentro de otros, como cuando añades una función `callback` como un argumento de otra función.

Una forma en la que puedes evitar este error es tan pronto como se escribe el carácter de apertura, incluir inmediatamente la coincidencia de cierre. Afortunadamente, la mayoría de los editores de código modernos generan la segunda mitad del par automáticamente.