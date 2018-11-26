# Ten cuidado al reinicializar variables dentro de un ciclo

A veces es necesario guardar información, incrementar los contadores o restablecer las variables dentro de un bucle. Un problema potencial es cuando las variables deben reinicializarse y no se reinicializan, o viceversa. Esto es particularmente peligroso si reseteas accidentalmente la variable que estás utilizando para la condición del terminación del ciclo, causando un bucle infinito.

La impresión de los valores de las variables en cada repetición del ciclo utilizando `console.log()` puede mostrar un comportamiento defectuoso relacionado con la incorrecta reinicialización de una variable.
