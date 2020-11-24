class Animal {
	constructor(nombre, genero) {

		this.nombre = nombre;
		this.genero = genero;
	}
	//Metodos
	sonar() {
		console.log('Hago sonidos porque estoy vivo');
	}
	saludar() {
		console.log(`Hola me llamo ${this.nombre}`);
	}
}
class Perro extends Animal {
	constructor(nombre, genero, tamanio) {
		//Metodo que manda a llamar un constructor de la clase padre
		super(nombre, genero);
		this.tamanio = tamanio;
	}
	sonar() {
		console.log('Soy un perro y mi sonido es un ladrido');
	}
	ladrar() {
		console.log('guau guau')
	}
}


const mat = new Animal('Mat', 'Macho'),
	scooby = new Perro('Scooby', 'Macho','Gigante')

console.log(mat)
mat.saludar();
console.log(scooby)
scooby.sonar();
scooby.ladrar();