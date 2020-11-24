/*1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.*/

function miFuncion(txt) {
    return txt.length;
}
console.log(`El numero de caracteres es: ${miFuncion("Hola mundo")}`);

function miFuncion(cadena = "") {
    if (!cadena) {
        console.log("No ingresaste ninguna cadena");
    } else {
        console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
    }
}
miFuncion("Hola mundo");

const miFuncion = (cadena = "") =>
    !cadena ?
    console.log("No ingresaste ninguna cadena") :
    console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

miFuncion("Hola mundo");
/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

function reCut(txt, num) {
    let cadena = txt.slice(0, num);
    return cadena;
}
console.log(reCut("Hola mundo", 4));

const recortar = (cadena = "", longitud = undefined) =>
    !cadena ?
    console.log("No ingresaste ninguna cadena") :
    console.log(cadena.slice(0, longitud));
recortar("Hola mundo", 4);
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. 
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function arra(txt) {
    return txt.split(" ");
}
console.log(arra("Hola que tal "));

const cadenaArreglo = (cadena = "", separador = undefined) =>
    !cadena ?
    console.log("No ingresaste texto") :
    separador === undefined ?
    console.log("No ingresaste un caracter que los separe") :
    console.log(cadena.split(separador));
cadenaArreglo("Hola mundo", " ");
cadenaArreglo();
cadenaArreglo("Hola mundo");

/* 4) Programa una función que repita un texto X veces, pe
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

function repeat(txt, num) {
    for (let i = 0; i < num; i++) {
        console.log(txt);
    }
}
repeat("Hola mundo", 4);


const repetir = (cadena = "", veces = undefined) => {
    if (!cadena) return console.log("No ingresaste texto");
    if (veces === undefined) return console.log("No ingresaste la cantidad");
    if (veces === 0) return console.log("El numero no se puede repetir");
    if (Math.sign(veces) === -1) return console.log("El numero es negativo");   
    for (let i = 1; i <= veces; i++) {
        console.log(`${cadena}, ${i}`);
    }
};
repetir("Hola mundo", 3);