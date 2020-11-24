 let filas = parseInt(prompt('Ingrese el numero de filas')),
 	columnas = parseInt(prompt('Ingrese el numero de columnas'))

//Declaracion de matrizA
let matrizA = new Array(filas);
for (let i = 0; i < matrizA.length; i++) {
	matrizA[i] = new Array(columnas);
}
//Declaracion de matriz B
let matrizB = new Array(filas);
for (let i = 0; i < matrizB.length; i++) {
	matrizB[i] = new Array(columnas);
}
//Declaracion de matriz resultado
let resultado = new Array(filas);
for (let i = 0; i < resultado.length; i++) {
	resultado[i] = new Array(columnas);
}

//Ingreso de valores de la MatrizA
function matriaAA() {
	
}

function matriaBB() {
	//Ingreso de valores de Matriz B
	for (let i = 0; i < matrizB.length; i++) {
		for (let j = 0; j < matrizB[0].length; j++) {
			matrizB[i][j] = parseInt(prompt('Ingrese valores para matriz B'));
		}
	}
}

function result() {
	//Suma de ambos resultados almacenados en matriz Resultado
	for (let i = 0; i < matrizA.length; i++) {
		for (let j = 0; j < matrizA[i].length; j++) {
			resultado[i][j] = matrizA[i][j] + matrizB[i][j];
		}
	}
}

function imprimir() {
	for (let i = 0; i < resultado.length; i++) {
		for (let j = 0; j < resultado[i].length; j++) {
			console.log(`[${i}, ${j}] = ${resultado[i][j]} `);
		}
	}
}
matriaAA(), matriaBB(), result(), imprimir()