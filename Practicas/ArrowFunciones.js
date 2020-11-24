//Funcion expresada

const saludo=function () {
    console.log('Hola');
}
saludo();

//arrow funtcion con 1 parametro

const saludar=(nombre)=>{
    console.log(`Adios ${nombre}`);
}
saludar('Dani');

//o tambien
const saludos=nombre=>console.log(`Adios ${nombre}`);
saludos('Nieves');

//Mandar parametros

const sumar = function (a,b) {
    return a + b;
}
console.log(sumar(20,50));

//o tambien, con mas de 1 parametro
const sumarARROW=(a,b)=> a+b;
console.log(sumarARROW(10,50));

//con muchas lineas de codigo
const functionVariadas=()=> {
    console.log('1');
    console.log('2');
    console.log('3');
}
functionVariadas();

//Funcion foreach
const num = [1,2,3,4,5];
num.forEach(function(el,index){
    console.log(`El elemento ${el} esta en la posicion ${index}`)
});
console.log('')

//o tambien en arrowfuntion sin llaves, unica linea de codigo
num.forEach((el,index)=>console.log(`El elemento ${el} esta en la posicion ${index}`));

//capturar con this

/*function perro(){
    console.log(this)
}
perro();*/

const gato = {
    nombre: 'mat',
    maullar:function () {
        console.log(this)
    }
}
gato.maullar()
