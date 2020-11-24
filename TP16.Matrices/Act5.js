let matrix = new Array(3);
for (let idx = 0; idx < matrix.length; idx++) {
	matrix[idx] = new Array(3);
}

function calculo(matrix) {
let iesima = []
	let acum = 0
	for (let f = 0; f < matrix.length; f++) {
		for (let c = 0; c < matrix.length; c++) {
			matrix[f][c] = parseInt(prompt("ingrese el valor a almacenar"));
		}
	}
	console.log(matrix);
	for (f = 0; f < matrix.length; f++) {
		for (c = 0; c < matrix.length; c++) {
			acum += matrix[f][c];

			iesima.push(acumulador)
		}
	}

	return console.log(iesima)

}
carga(matrix)