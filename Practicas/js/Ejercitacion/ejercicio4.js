/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
const primo = num => {
    //teniendo en cuenta los casos especiales
    if (num == 0 || num == 1 || num == 4) return false

    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) return false;
    }
    return true
}
console.log(primo(1))
console.log(primo(7))

const numPrimo = (num = undefined) => {

    if (num === undefined) return console.warn('No ingresaste un numero')

    if (typeof num !== 'number') return console.warn(`El valor ${num} ingresado, NO es un numero`)

    if (num === 0) return console.log('El numero no puede ser 0')

    if (num === 1) return console.log('El numero no puede ser 1')

    if (Math.sign(num) === -1) return console.warn('El numero no puede ser negativo')

    let divisible = false;

    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            divisible = true
            break
        }
    }
    return divisible ?
        console.log(`El numero ${num}, No es primo`) :
        console.log(`El numero ${num}, Es primo`)
}
numPrimo()
numPrimo(0)
numPrimo(1)
numPrimo(-2)
numPrimo(7)
/*13) Programa una función que determine si un número es par o impar, pe. 
miFuncion(29) devolverá Impar.*/

const parEimpar = (num = '') => {
    if (!num) return console.warn('No ingresaste ningun numero')
    if (typeof num !== 'number') return console.warn(`El valor ${num} ingresado, NO es un numero`)

    if (num % 2 === 0) return console.info(`El numero ${num} es par`)
    if (num % 2 !== 0) return console.info(`El numero ${num} es impar`)
}

parEimpar()
parEimpar('3')
parEimpar(14)
parEimpar(29)


const paridad = (num = undefined) => {
    if (!num) return console.warn('No ingresaste ningun numero')
    if (typeof num !== 'number') return console.warn(`El valor ${num} ingresado, NO es un numero`)

    return ((num % 2 === 0)) ?
        console.info(`El numero ${num} es Par`) :
        console.info(`El numero ${num} es impar`)
}
paridad()
paridad('2')
paridad(-2)
paridad(16)
paridad(19)
/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F.*/

const convertidor = (num = undefined, unidad = undefined) => {

    if (num === undefined) return console.warn('No ingresaste grados a convertir')
    if (typeof num !== 'number') return console.warn(`El valor ${num} ingresado, NO es un numero`)
    if (typeof unidad !== 'string') return console.error(`El valor ${unidad} ingresado, NO es una cadena de texto`)
    if (unidad === undefined) return console.warn('No ingresaste el tipo de grado a convertir')
    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Valor de unidad no reconocido')

    if(unidad === 'C'){
        return console.info(`${num} °C = ${Math.round(num * (9/5) +32)}°F`)
    } else if(unidad === 'F'){
        return console.info(`${num} °F = ${Math.round(num -32) *( 5/9)}°C`)
    } else{
        return console.log(`El tipo de grados a convertir NO es valido`)
    }
}
convertidor()
convertidor('3')
convertidor(2, )
convertidor(3, false)
convertidor(10, 'Hola')
convertidor(10, 'E')
convertidor(0, 'C')
convertidor(100, 'F')