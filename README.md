# piocamp-debugging101

Taller sobre Debugging para el Piocamp (@pionerasdev) 🔎🐛🐞🕷🔍

## Primeros pasos
Primero que todo, vamos a ver tres ejemplos sobre comportamientos extraños de JavaScript. Para esto debemos seguir los siguientes pasos:

* Abrir una pestaña cualquiera, puede ser una pestaña en blanco escribiendo en la barra de direcciones: `about:blank`.
* Una vez allí, vamos a abrir la herramienta de Desarollo de Chrome, llamada Chrome DevTools (CDT), para esto damos click derecho en cualquier parte de la página y seleccionamos inspeccionar. También puedes acceder a ella desde el teclado con los siguientes comandos:
  - Si estás en Windows o Linux: `Ctrl + Shift + I`.
  - Si estás en Mac: `Cmd + Opt + I`.

* Vamos a escribir los tres comandos siguientes. 

  - `"🌻".length`
  - `0.1 + 0.2`
  - `new Date(2016, 5, 31)`

## Detección de Errores

En esta sección vamos a hablar sobre los errores más comunes que podemos encontrar cuando trabajamos con JavaScript y algunos ejemplos sobre sus causas y cómo evitarlos. 

* _Syntax Error_: Este error se da cuando usamos símbolos que no se ajustan a la sintaxis del lenguaje o cuando usamos palabras reservadas para nombrar variables o funciones.

  Por ejemplo:

  ``` Javascript
    var function = ["🥗", "🍚", "🍟", "🍗"];
  ```

  ``` Javascript
    for (let i = 0; i < 5,; ++i) {
      console.log('I love 🍔');
    }
  ```

* _TypeError_: Este error se da cuando lees una propiedad o llamas un método de un objeto que no ha sido definido. 

  Por ejemplo: 

  ``` Javascript
  var matilda = '🐈';
  matilda.miau();

  ```

  ``` Javascript
  var x = document.getElementByID('🐞');
  ```

* _Range Error_: Este error se da cuando tratamos de usar un valor que no está dentro del rango permitido y también cuando hacemos uso de recursividad infinita. 

  Por ejemplo:

  ``` Javascript
  new Array(-1);
  ```

  ``` Javascript
  function loop(x) {
    if (x >= 1000000000000)
      return;
    loop(x + 1);
  }
  loop(0);
  ```

  ```Javascript
  '🍃️❤️🌊'.repeat(Infinity);
  ```

* _Reference Error_: Este error se da cuando tratamos de usar una variable que no ha sido definida todavía.

  Por ejemplo:  

  ``` Javascript
  luna.substring(1);
  ```

  ``` Javascript
  function luna() { 
    var meow; 
  }
  console.log(meow);
  ```

## A practicar!

Ya que hemos visto varios ejemplos sobre los errores más comunes en Javascript, podemos avanzar a resolver algunos desafíos. Pasa esto sigue los siguientes pasos:
* Haz fork de este repositorio.🍴
* Clona tu repositorio en tu computador personal. 💻
* Empieza el primer desafío ejecutando el siguiente comando en la consola: 🤓
  `git checkout 1` 
* Una vez resuelto el primer desafío, puedes continuar con los siguientes ejecutando el mismo comando con los diferentes números de los desafíos. 🎉🎊


## Recursos

* Chrome Dev Tools: https://developers.google.com/web/tools/chrome-devtools/
* Lista de Errores: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
* Mejorar tus habilidades de Debugging: https://medium.freecodecamp.org/how-to-improve-your-debugging-skills-abb5b363bdb8
* Consejos para principiantes: https://blog.hartleybrody.com/debugging-code-beginner/
