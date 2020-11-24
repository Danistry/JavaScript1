let vector = [13, 13, 12, 15, 4, 2, 10, 14, 19, 2, 18, 5, 6, 14, 3, 12, 20, 7, 11, 10, 2, 17, 7, 9, 17, 9, 8, 8, 3];
let equipos = 8;
function ordenacionSeleccion(valor) {
    let minimo = 0;
     let cambio;
    for(let i = 0; i < (valor.length-1); i++){
        minimo = i;
        for(let j = i + 1; j < (valor.length-1); j++){
            if (valor[minimo] > valor[j]) {
                minimo = j; 
            }
        }
        cambio = valor[minimo];
        valor[minimo] = valor[i];
        valor[i] = cambio;
    }
    return valor;
}

function buscar(vector, equipos) {
	for (i = 0; i < vector.length; i++) {
		if (vector[i] == equipos) {
			if (i + 1 > 10) {
				return (`el dia ${i + 1}/08/2020, han jugado ${equipos} equipos`)
			} else {
				return (`el dia 0${i + 1}/08/2020, han jugado ${equipos} equipos`)
			}
		}
	}
}
console.log(ordenacionSeleccion(vector));
console.log(buscar(vector, equipos));

