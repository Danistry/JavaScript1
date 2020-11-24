let matrizA = new Array(3);
for (let i = 0; i < matrizA.length; i++) {
	matrizA[i] = new Array(3);
}
let resultado = new Array(3);
for (let i = 0; i < resultado.length; i++) {
	resultado[i] = new Array(1);
}
function calif(matrizA) {
	for (let i = 0; i < matrizA.length; i++) {
		for (let j = 0; j < matrizA[0].length; j++) {
			matrizA[i][j] = parseInt(prompt('Ingrese las calificaciones'));
		}
	}
return console.log(matrizA);
}
function promedioAlumno(resultado) {
	for (let i = 0; i < resultado.length; i++) {
		for (let j = 0; j < resultado[0].length; j++) {
			resultado[i][j] = matrizA[i][j] / 3
		}
	}
}
function imprimir(resultado) {
	for (let i = 0; i < resultado.length; i++) {
		for (let j = 0; j < resultado[i].length; j++) {
			console.log(resultado[i][j]);
		}
	}	
}
calif(matrizA);
promedioAlumno(resultado)
imprimir(resultado)