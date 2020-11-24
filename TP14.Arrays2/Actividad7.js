let vector = [13, 13, 12, 15, 4, 2, 10, 14, 19, 2, 18, 5, 6, 14, 3, 12, 20, 7, 11, 10, 2, 17, 7, 9, 17, 9, 8, 8, 3];
let equipos = 15;


function ordenar(a,b) {
    return a - b
}
vector.sort(ordenar)
console.log(vector);

function buscar(vector, equipos) {
	for (i = 0; i < vector.length; i++) {
		if (vector[i] == equipos) {
			if (i + 1 > 10) {
				return (`El dia ${i}/08/2020, han jugado ${equipos} equipos`)
			} else {
				return (`El dia 0${i}/08/2020, han jugado ${equipos} equipos`)
			}
		}
	}
}
console.log(buscar(vector, equipos));

