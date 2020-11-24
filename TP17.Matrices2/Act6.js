let matriz = new Array(2)
for (let i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(2)
}

//Carga
function carga(matriz) {
	matriz[0][0] = 50
	matriz[0][1] = 60
	matriz[1][0] = 80
	matriz[1][1] = 45
}
console.log(carga(matriz));

//Punto A
function gastosTorales(matriz) {
	let arr = []
	for (let i = 0; i < matriz.length; i++) {
		let aux = 0
		for (let j = 0; j < matriz.length; j++) {
			aux = aux + parseFloat(matriz[i][j])
		}
		arr.push(aux)
	}
	return arr
}
console.log(gastosTorales(matriz));

//B
function porcentaje(total, costo) {
	return (costo / total) + 100
}

function porcentajeLogistico(matriz) {
	let arrayTotal = gastosTorales(matriz)
	let mayor = 0
	let la = 0
	for (var i = 0; i < matriz.length; i++) {
		let auxPor = porcentaje(arrayTotal[i], matriz[i][4])
		if (mayor < auxPor) {
			mayor = auxPor
			la = i + 1
		}
	}
	return la
}
console.log(porcentajeLogistico(matriz));

function porcentajeLuzAgua(matriz) {
	let arrayTotal = gastosTorales(matriz)
	let mayor = 0
	let la = 0
	for (var i = 0; i < matriz.length; i++) {
		let auxSuma=[i][4] + matriz[i][4]
		let auxPor = porcentaje(arrayTotal[i], auxSuma)
		if (mayor < auxPor) {
			mayor = auxPor
			la = i + 1
		}
	}
	return la
}
console.log(porcentajeLuzAgua(matriz));