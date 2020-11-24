/*function parcial(txt) {

    let i = 0;
    let cont = 0;
    let palabra = "";

    while (i < txt.length) {
        if (txt[i] != " ") {
            palabra += txt[i];
            i++;
        } else {
            palabra = palabra.toLowerCase();
            if (palabra[0] == palabra[palabra.length - 1]) {
                cont++;
            }
            palabra = "";
            i++;
        }
    }
    palabra = palabra.toLowerCase();
    if (palabra[0] == palabra[palabra.length - 1]) {
        cont++;
    }
    return (cont);
}

let txt = "Sociedades";
console.log(`Ejemplo: ${parcial(txt)}`);*/


function buscarMayusculas(texto){
    let i=0;
    let cadena='';
    while(i<texto.length){
        let tem='';
        while(texto[i]==' ' && i<texto.length){i++;}
        while(texto[i]!=' ' && i<texto.length){
            tem+=texto[i];
            i++;
            console.log(tem)
        }
        if(!texto.startsWith(tem)){
            if(tem.startsWith(tem[0].toLocaleUpperCase())){
                cadena+=tem+' ';
            }
        }
        }
        cadena=cadena.trim();
    return cadena
}
console.log(buscarMayusculas('Alguien SAbe si Osvaldo esta trabaJando'))