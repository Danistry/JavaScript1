let matriz = new Array(4); // Estructura para filas
for (let i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(4); // Estructura para columnas
}

function diagonal() {

	for (let j = 0; j < matriz[0].length; j++) {
		for (let i = 0; i < matriz.length; i++) {
			matriz[i][j] = prompt('Ingrese valores')

		}
	}
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
diagonal()
imprimirDiagonal()