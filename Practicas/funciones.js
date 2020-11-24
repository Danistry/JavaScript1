function nameExample() {
    console.log("Uno");
    console.log("dos");
    console.log("tres");
}
nameExample();

function devolverValor(){
    console.log("Uno");
    return "la funcion devolvio un string";
    console.log("dos");
    console.log("tres");
    
}
let valor = devolverValor();
console.log(valor);

function saludo(name,age) {
    console.log(`Hola mi nombres es ${name} y tengo ${age} años`);
}
saludo("Danistry","24");
//funcion anonima
const funcionExpresada = function(){
    console.log(`Funcion expresada asiganada a una variable`);
}
funcionExpresada();