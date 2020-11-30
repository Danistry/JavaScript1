window.onload = function () {
	pantalla = document.getElementById('textoPantalla')
	document.onkeydown = teclado; //funcion deteclado disponible
}
let x = 0
	x1 = 1
	coma = 0
	numero_Oculto = 0
	operacion_Curso = 'no'


//Funcion para mostrar los numeros en pantalla

const numero = (num) =>{
	if(x == '0' || x1 == 1){
		pantalla.innerHTML = num //enseña el numero en pantalla
		x = num //guarda el numero
		if(num == '.'){ // si se escribe una coma al principio del numero
			pantalla.innerHTML = '0'
			x = num
			coma = 1 // cambio el estado de la coma
		}
	}
	else{ //Para continuar escribiendo la coma
		if(num == '.' && coma == 0){
		pantalla.innerHTML += num 
		x += num
		coma = 1
	}
 //Si se intenta escribir una segunda coma, como decimal no pasara nada
 	else if (num == '.' && coma == 1) {}
 	else{
 		pantalla.innerHTML += num
 		x +=num
 	}

x1 = 0 // el numero esta iniciado y podes ampliarlo
}

const operacion = (s) =>{
	igualar() // Si hay operaciones pendientes se realizan primero
	numero_Oculto = x // ponemos 1º numero en espera para poder seguir escribiendo
	operacion_Curso = s //Se guarda el tipo de operacion	
	x1 = 1 // se inicializa la pantalla
} 

const igualar = () =>{
	if (operacion_Curso == 'no') {pantalla.innerHTML = x}
	else {
		let solucion1 = numero_Oculto + operacion_Curso + x //escribimos la operacion en una cadena
		let solucion = eval(solucion1)
		pantalla.innerHTML = solucion // se muestra en pantalla la solucion
		x = solucion
		operacion_Curso = 'no'
		x1 = 1 //reiniciar la pantalla
	}
} 

const retro = () =>{ //Elimina el ultimo numero escrito
	let cifras = x.length
	let br = x.substr(cifras - 1, cifras)
	x = x.substr(0, cifras - 1) // quita el ultimo caracter
	if (x == '') {x = '0'} // si ya no hay caracteres ,aparece un 0
	if (br == '.') {coma = 0} //si el caracter que se elimina es la coma, se puede volver a poner
	pantalla.innerHTML = x //resultados en pantalla
}

const borradoParcial = () =>{
	pantalla.innerHTML = 0  //Limpiamos la pantalla
	x = '0' //reiniciamos numero en la pantalla
	coma = 0 
	numero_Oculto = 0
	operacion_Curso = 'no' // reiniciar operacion en curso
}

const borradoTotal = () =>{
	pantalla.innerHTML = 0
	x = '0'
	coma = 0
	numero_Oculto = 0
	operacion_Curso = 'no'
}

const teclado = (elEvento) =>{
	evento = elEvento || window.event;
	let key = evento.keyCode
	if (key > 47 && key < 58) {
		let p = key - 96
		p = String(p)
		numero(p)
	}
	if (key == 110 || key == 190) {numero('.')} //teclas decimales
	if (key == 106) {operacion('*')}
	if (key == 107) {operacion('+')}
	if (key == 109) {operacion('-')}
	if (key == 111) {operacion('/')}
	if (key == 32 || key == 13) {igualar()} //tecla de igual: enter o barra espaciadora
	if (key == 46) {borradoTotal()} // tecla supr
	if (key == 8) {retro()} // tecla de retroceso
	if (key == 36) {borradoParcial()} // tecla de inicio
}
