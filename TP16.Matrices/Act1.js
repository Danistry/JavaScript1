	let datos = new Array(3) //Filas
	for (let i = 0; i < datos.length; i++) {
		datos[i] = new Array(3) //Columnas
	}

	function date() {

		for (let i = 0; i < datos.length; i++) {
			for (let j = 0; j < datos[0].length; j++) {
				datos[i][j] = prompt('Ingrese los valores de la matriz')
			}

		}
	}

	function imprimirPar() {
		for (let i = 0; i < datos.length; i += 2) {
			for (let j = 0; j < datos[0].length; j++) {
				console.log(datos[i][j])

			}
		}
	}
	console.log(date());
	console.log(imprimirPar());