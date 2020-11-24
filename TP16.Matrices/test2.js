let matrizA = new Array(2);
for (let i = 0; i < matrizA.length; i++) {
	matrizA[i] = new Array(2);
}
let matrizVector = new Array(2); // Estructura para filas
for (let i = 0; i < matrizVector.length; i++) {
	matrizVector[i] = new Array(1); // Estructura para columnas
}
let resultado = new Array(2);
for (let i = 0; i < resultado.length; i++) {
	resultado[i] = new Array(2);
}
for (let i = 0; i < matrizA.length; i++) {
	for (let x = 0; x < matrizA[0].length; x++) {
		matrizA[i][x] = parseInt(prompt('Ingrese valores para matriz A'));
	}
}
console.log(matrizA);
//Ingreso de valores de  el vector columna
for (let x = 0; x < matrizVector[0].length; x++) {
	for (let i = 0; i < matrizVector.length; i++) {
		matrizVector[i][x] = parseInt(prompt('Ingrese valores para el vector columna'));
	}
}

console.log(matrizVector);

for (let i = 0; i < matrizA[0].length; i++) {
	for (let x = 0; x < matrizA.length; x++) {
		resultado[i][x] = matrizA[i][x] * matrizVector[i][x];
	}
}
console.log(resultado);