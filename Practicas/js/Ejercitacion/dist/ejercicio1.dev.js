"use strict";

/*1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.*/
function miFuncion(txt) {
  return txt.length;
}

console.log("El numero de caracteres es: ".concat(miFuncion('Hola mundo')));