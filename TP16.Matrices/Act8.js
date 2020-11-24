let matriz = new Array(3); //Array de 3 filas
for (let i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(3); //dimensiono las columnas
}

let vector = [2, 2, 2]; //vector con tres valores

for (let f = 0; f < matriz.length; f++) {
	for (let c = 0; c < matriz[f].length; c++) {
		matriz[f][c] = parseInt(prompt('Ingrese valores'))	//cargo la matriz por fila con números correlativos
	}
}
function result(arr, vec) {
	for (let f = 0; f < arr.length; f++) {
		for (let c = 0; c < arr[f].length; c++) {
			arr[f][c] *= vec[c];	//multiplico y guardo
		}
	}
	return arr;
}

console.log(result(matriz, vector));