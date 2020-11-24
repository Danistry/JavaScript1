import saludar, { PI, user } from "./constantes.js";
import { aritmetica as calculos } from "./aritmeticas.js";
import { Saludo } from "./constantes.js";

console.log("Me la re banco");
//console.log(aritmetica.sumar(3,4))
//console.log(aritmetica.restar(10,4))
console.log(calculos.sumar(10, 5));
console.log(PI, user);
saludar();

let salud = new Saludo();
salud;
