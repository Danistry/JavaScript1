"use strict";

/*1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.*/
function miFuncion(txt) {
  return txt.length;
}

console.log("El numero de caracteres es: ".concat(miFuncion('Hola mundo')));
fu;
/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

function reCut(txt, num) {
  var cadena = txt.slice(0, num);
  return cadena;
}

console.log(reCut('Hola mundo', 4));
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. 
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function arra(txt) {
  return txt.split(' ');
}

console.log(arra('Hola que tal '));
/* 4) Programa una función que repita un texto X veces, pe
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

function repeat(txt, num) {
  for (var i = 0; i < num; i++) {
    console.log(txt);
  }
}

repeat('Hola mundo', 4);