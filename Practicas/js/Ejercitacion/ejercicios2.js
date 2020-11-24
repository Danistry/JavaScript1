/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
 */

function reversa(txt) {
    let cadena = txt.split("").reverse().join("");
    return cadena;
}
console.log(reversa("Hola Mundo"));

const reversa = (cadena = "") =>
    !cadena
        ? console.warn("No ingresaste una cdena de texto")
        : console.info(cadena.split("").reverse().join(""));
reversa();
reversa("Hola Mundo");
/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.
miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
function count(txt, word) {
    let cadena = txt.split(" ");
    let cadena2 = word.split(" ");
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].includes(cadena2)) {
            contador++;
        }
    }
    return contador;
}
console.log(count("Hola mundo adios mundo", "mundo"));

const contar = (cadena = "", word = "") => {
    if (!cadena) return console.warn("No ingresaste texto");

    if (!word) return console.warn("No ingresaste palabra a evaluar");

    let i,
        contador = 0;
    while (i !== -1) {
        i = cadena.indexOf(word, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${word} se repite ${contador} veces`);
};
contar();
contar("Hola mundo adios mundo");
contar("Hola mundo adios mundo", "mundo");
/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
pe. mifuncion("Salas") devolverá true. */

function palindromo(txt) {
    return txt == txt.split("").reverse().join("");
}
console.log(palindromo("salas"));

const Palindromo = (palabra = '') => {
    if (!palabra) return console.warn('No ingresaste una palabra o frase')

    palabra = palabra.toLowerCase()
    let inversa = palabra.split('').reverse().join('')
    return (palabra === inversa)
        ? console.info(`Si es palindromo, Palabra original ${palabra}, Palabra al reves ${inversa}`)
        : console.info(`No, no es palindromo, Palabra original ${palabra}, Palabra al reves ${inversa}`)
}
Palindromo()
Palindromo('Hola mundo')
Palindromo('Salas')
/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

function reemplazar(txt) {
    let cadena = txt.replace(/xyz/gi, "");
    return cadena;
}
console.log(reemplazar("xyz1, xyz2, xyz3, xyz4 y xyz5"));

const reemplazo = (texto = '', patron = '') =>
    (!texto)
        ? console.warn('No ingresaste ningun texto')
        : (!patron)
            ? console.warn('No ingresaste ningun patron de caractertes')
            : console.info(texto.replace(new RegExp(patron, 'ig'), ''));

            
reemplazo()
reemplazo('xyz1, xyz2, xyz3, xyz4 y xyz5')
reemplazo('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz')