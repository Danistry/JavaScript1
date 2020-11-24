const numeros=[1,2,3]

let uno = numeros[0], dos=numeros[1],tres=numeros[2];
console.log(uno,dos,tres);
//Sin destructurar

const[one,two,three]= numeros;
console.log(one,two,three);
//con destructuracion

const persona={
    nombre:'Dani',
    apellido: 'Ojeda',
    edad: 35
}
let {nombre,apellido,edad}=persona;
console.log(nombre,apellido,edad);
