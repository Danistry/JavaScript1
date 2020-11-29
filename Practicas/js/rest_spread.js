//rest
function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function (n) {
        resultado += n;
    })
return resultado;
}
console.log(sumar(2,2));
console.log(sumar(2,2,3,4,5));


//Spread operation
const array1=[1,2,3,4,5], array2=[5,6,7,8,9];
console.log(array1,array2);

const array3=[...array1,...array2];
console.log(array3);