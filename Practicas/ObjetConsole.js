console.error('warning')
console.warn('warning2')
console.info('information')

const name = 'Danistry',
	surname = 'Ojeda',
	age = 24

console.log(name, surname, age)
console.log(`Hola soy ${name} de apellido ${surname} y de edad ${age}`)
console.log(`Hola sot %s de apellido %s y de edad %d`, name, surname, age)

console.clear();

console.group('Matriz A X matriz B')
console.log('[][]')
console.log('[][]')
console.groupEnd()

console.count('Time')
console.time('Tiempo')
console.log(' ')
const num = [1, 2, 3, 4, 5],
	vocales = ['a', 'e', 'i', 'o', 'u']
console.table(num)
console.log(' ')
console.table(vocales)
console.timeEnd('Tiempo')

let x = 3,
	y = 2,
	pruebaXY = 'Se espera que X siempre sea menor que Y';

console.assert(x < y, {
	x,
	y,
	pruebaXY
})