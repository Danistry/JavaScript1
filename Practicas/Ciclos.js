let cont = 5;
/*while (cont < 10) {
    cont++;
    console.log(cont);*/

/*do {
    console.log(cont)
    cont++;
} while (cont < 10);
*/
/*for (let i = 0; i < 10; i++) {
  console.log(i);
}*/
let num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
/*
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}*/

const dani = {
    nombre: 'Danistry',
    apellido: 'Ojeda',
    edad: 24
}

for (const propiedad in dani) {
    console.log(`Key: ${propiedad}, Value: ${dani[propiedad]}`);

}
let cadena = `Hola mundo`
for (const elemento of cadena) {
    console.log(elemento);
}