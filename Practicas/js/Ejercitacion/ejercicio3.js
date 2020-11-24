/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
function rando(min, max) {
    let num = Math.random() * (max - min);
    num = Math.floor(num)
    return num + min;
}
console.log(rando(501, 600))

const randomonium = () => console.info(Math.round(Math.random() * 100) + 500)
randomonium()
/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const capicua = (num = '') => {
    if (!num) return console.warn('No ingresaste ningun numero')
    if (typeof num !== 'number') return console.warn(`El valor ${num} ingresado, NO es un numero`)

    num = num.toString()
    let alreves = num.split('').reverse().join('')

    return (num === alreves)
        ? console.info(`Si es capicua, Numero original ${num}, Numero al reves ${alreves}`)
        : console.info(`No, no es capicua, Numero original ${num}, Numero al reves ${alreves}`)
}
capicua()
capicua('11')
capicua(1991)
/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
se define como el producto de todos los números enteros positivos desde 1 hasta n), 
pe. miFuncion(5) devolverá 120.*/

const factorial = num => {
    if (num < 0) num = num * -1
    if (num <= 0) return 1
    let factorial = 1
    while (num > 1) {
        factorial = factorial * num
        num--
    }
    return console.log(factorial)
}
factorial(5)

const facto = (num = undefined) => {
    if (num === undefined) return console.warn('No ingresaste un numero')

    if (typeof num !== 'number') return console.warn(`El valor ${num} ingresado, NO es un numero`)

    if (num === 0) return console.log('El numero no puede ser 0')

    if (Math.sign(num) === -1) return console.warn('El numero no puede ser negativo')

    let factorial = 1

    for (let i = num; i > 1; i--) {
        factorial *= i;
    }
    return console.info(`El factorial de ${num} es ${factorial}`)
}

facto()
facto('2')
facto(0)
facto(-3)
facto(5)