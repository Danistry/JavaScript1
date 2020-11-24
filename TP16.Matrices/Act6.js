 let filas = parseInt(prompt('Ingrese el numero de filas')),
 	columnas = parseInt(prompt('Ingrese el nmero de colomnas'))

 // Declaración de una matriz 
 let matriz = new Array(filas);
 for (let i = 0; i < matriz.length; i++) {
 	matriz[i] = new Array(columnas);
 }
 function matrix(matriz) {
 	for (let i = 0; i < matriz.length; i++) {
 		for (let j = 0; j < matriz[0].length; j++) {
 			matriz[i][j] = prompt('Ingrese valores');
 		}
 	}
 }
 function maximo() {
 	let max = 0
 	let fila, columna = 0
 	for (var j = 0; j < matriz[0].length; j++) {
 		for (var i = 0; i < matriz.length; i++) {
 			if (matriz[i][j] > max) {
 				max = matriz[i][j]
 				fila = i
 				columna = j
 			}

 		}
 	}
 	return console.log(`Es el numero ${max} y esta en el indicie: [${fila}][${columna}]`)
 }

 function minimo() {
 	let min = 99999
 	let fila, columna = 0
 	for (var j = 0; j < matriz[0].length; j++) {
 		for (var i = 0; i < matriz.length; i++) {
 			if (matriz[j][i] < min) {
 				min = matriz[i][j]
 				fila = i
 				columna = j
 			}
 		}
 	}
 	return console.log(`Es el numero ${min} y esta en el indicie: [${fila}][${columna}}`)
 }
 matrix(matriz), maximo(), minimo()