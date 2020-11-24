let num = [2, 5, 6, 8]
//Sumar elementos
const res = num.reduce((acc, item) => {
    return acc = acc + item;
});

console.log(res);
 
//concatenar elementos
const strings = ['Hola','amigo', 'todo','bien'];

const res1 = strings.reduce((acc, item) => {
    return acc += '-' + item;
});
console.log(res1);

//Saber el numero mas grande de un array

const max = num.reduce( (acc,item)=>{
    return Math.max(acc,item),Math.min(acc,item)
}, );
console.log(max);