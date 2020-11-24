function num(vector) {
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === '0') {
      console.log(`El ${vector[i]} esta el posicion: ${[i]}`);
    }

  }
}
num(['0', '1', '5', '0', '6', '8', '0']);

function devolverImpares(vector) {
  let impares = [];

  for (let i = 0; i < vector.length; i++) {
    if (i % 2 !== 0) {
      impares.push(vector[i]);
    }
  }
  return console.log(`Los numeros en posiciones impares son: ${impares}`);
}
devolverImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


function primerNegativo(vector) {

  let idx = 0;
  for (let i = 0; i < vector.length; i++) {
      idx = vector[i];

      if (idx < 0) {
          console.log(`El primer elemento negativo se encuentra en la posicion: ${[i]}`);
          break;
      }
  }
  return (-1);
}
console.log(primerNegativo([1,2,3,4,5,6,7,8,9,0,-1]));


function num(vector, n) {
  let cont = 0;
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === n) {
      cont++;
    }
  }
  return console.log(`El numero se repite un total de ${cont} veces`);
}
num([1, 2, 2, 3, 4, 5, 6, 7, 2, 8, 9, 10, 11, 12, 13, 14, 15], 2);