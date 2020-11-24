	let datos = new Array(3) //Filas
	for (let i = 0; i < datos.length; i++){
		datos[i] = new Array(3) //Columnas
	}
	let a = []
function date() {

		for (let i = 0; i < datos.length; i++) {
			for (let j = 0; j < datos[0].length; j++) {
				datos[j][i] = prompt('Ingrese los valores de la matriz')
			}

		}
	}

function imprimirImapar() {
		for (let i = 0; i < datos.length; i++) {
			for (let j = 0; j < datos[0].length; j+=2) {
					console.log(datos[j]); 

			}
		}
	}
date()
imprimirImapar()