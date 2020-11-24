let num = [];
let pos = ["unidad", "decena", "centena", "millar"];

function cargar(num) {
    for (var i = 0; i < 4; i++) {
        num.push(prompt("Ingrese el bolillero para " + pos[i]));
        console.log(`${num[i]} en la ${pos[i]}`)
    }
    
console.log(`El numero es ${num}`)
}
cargar(num);

