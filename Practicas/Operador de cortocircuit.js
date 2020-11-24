//Operadores de corto cuicuito
function saludar(nombre) {
	nombre = nombre || 'Unnamed' //se le agrega un parametro por defecto
	console.log(`Hola ${nombre}`);
}
saludar()
console.log();
console.log('Operadores OR');
console.log(false || 'Valor de la derecha');
console.log(true || 'Valor de la derecha');
console.log();
//Operador de corto circuito AND
console.log('Operador AND');
console.log(false && 'Valor de la derecha');
console.log(true && 'Valor de la derecha');