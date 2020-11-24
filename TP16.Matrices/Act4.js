let matriz = new Array(3); // Estructura para filas
for (let i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(3); // Estructura para columnas
}

function Ingress() {
	for (let i = 0; i < matriz[0].length; i++) {
		// Se deja -fija- la columna
		for (let j = 0; j < matriz.length; j++) {
			matriz[i][j] = prompt('Ingrese valores para la matriz')
		}
	}

}

function imprimirPares() {
	for (let i = 0; i < matriz.length; i += 2) {
		for (let j = 0; j < matriz[0].length; j++) {
			console.log((matriz[i][j]).split(' '))
		}
	}
	console.log(' ');
}

function imprimirImapar() {
	for (let i = 0; i < matriz.length; i++) {
		for (let j = 1; j < matriz[0].length; j += 2) {
			console.log((matriz[i][j]).split(' '))
		}
	}
console.log(' ');
}

function imprimirDiagonal() {
	for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz[0].length; j++) {
			if (i === j) {
				console.log(matriz[i][j].split(' '))
			}
		}
	}
}
Ingress(), imprimirPares(), imprimirImapar(), imprimirDiagonal()