let race = new Array(5)
for (let i = 0; i < race.length; i++) {
	race[i] = new Array(7)
}
const vueltaRapida = (matriz) => {
	let minTime = matriz[0][2]
	let posicion = matriz[0][0]
	for (let i = 0; i < matriz.length; i++) {
		if (minTime > matriz[i][0]) {
			minTime = matriz[i][0]
			posicion = matriz[i][0]
		}
	}
	return posicion
}

function promVueltas(matriz) {
	let prom = 0
	for (let i = 0; i < race.length; i++) {
		prom = prom + matriz[i][6]
	}
	return prom / matriz.length
}

function moreFast(matriz) {

	let menores = [matriz[0][3], matriz[0][4], matriz[0][5]]
	let posiciones = [matriz[0][0], matriz[0][0], matriz[0][0]]

	for (let i = 0; i < matriz.length; i++) {
		if (menores[0] > matriz[i][3]) {
			menores[0] = matriz[i][3]
			posiciones[0] = matriz[i][0]
		}
		if (menores[1] > matriz[i][4]) {
			menores[1] = matriz[i][4]
			posiciones[1] = matriz[i][0]
		}
		if (menores[2] > matriz[i][5]) {
			menores[2] = matriz[i][5]
			posiciones[2] = matriz[i][0]
		}
	}
	return posiciones
}
//Carga de datos
race[0] = [1, 16, 81.435, 20.0, 31.0, 39.435, 55]
race[1] = [2, 12, 80.435, 22.4, 34.3, 32.435, 35]
race[2] = [3, 14, 84.245, 24.2, 32.0, 33.435, 65]
race[3] = [4, 45, 79.405, 25.1, 35.1, 30.435, 15]
race[4] = [5, 67, 83.245, 20.5, 36.0, 32.535, 25]

// console.log(`la matriz es ${race}`);
console.log(`El promedio de vueltas es ${promVueltas(race)}`);
console.log(`El conductor con la vuelta mas rapida quedo en la pisicion ${vueltaRapida(race)}`);
console.log(`Se imprimen las posicones: `);
let aux = moreFast(race)
for (let i = 0; i < aux.length; i++) {
	console.log(`El piloto con el mejor tiempo en el sector ${i + 1} termino en la pos: ${aux[i]}`);
}