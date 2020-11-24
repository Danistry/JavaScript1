//Herencia prototipal
function Animal(nombre, genero) {
	//Atributos
	this.nombre = nombre;
	this.genero = genero;
}

Animal.prototype.sonar = function() {
	console.log('Hola me llamado ${this.nombre}');
}

function perro(nombre, genero, tamanio) {
	this.super = Animal;
	this.super(nombre, genero)
	this.tamanio = tamanio
}
//Perro esta heredando de animal
perro.prototype = new Animal();
perro.prototype.constructor = perro;

//Sobre escritura del metodo del padre al hijo
perro.prototype.sonar = function() {
	console.log('Soy un perro y mi sonido es un ladrido');
}

perro.prototype.ladrar = function() {
	console.log('guau guau')
}

const snoopy = new perro('Dogui', 'Macho', 'pequeño')
console.log(snoopy)

snoopy.ladrar();
snoopy.sonar();