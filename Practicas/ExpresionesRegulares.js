//Son una secuencia de caracteres que forma un patron de busqueda particularmente utilizada 
//para  busqueda de patrones de caracteres
let cadena = "Hola1 mis amigos como estan, Mis compas"

/*let expReg = new RegExp('mis','ig')*/
let expReg2 = /mis/ig

/*console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));*/

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));