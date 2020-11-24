/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

const elev = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if (!(arreglo instanceof Array)) return console.error('El valor que ingresaste no es un arreglo')
    if (arreglo.length === 0) return console.error('El arreglo esta vacio ')

    for (const num of arreglo) {
        if (typeof num !== 'number') return console.error(`El valor ${num} ingresado, No es un numero`)
    }

    const newArr = arreglo.map(el => el * el)
    return console.info(`Arreglo original: [${arreglo}]\nArreglo elevado al cuadrado: [${newArr}]`)
}
elev()
elev('2')
elev([])
elev('Hola')
elev([1, 4, 5])

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

const MinMax = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if (!(arreglo instanceof Array)) return console.error('El valor que ingresaste no es un arreglo')
    if (arreglo.length === 0) return console.error('El arreglo esta vacio ')

    for (const num of arreglo) {
        if (typeof num !== 'number') return console.error(`El valor ${num} ingresado, No es un numero`)
    }

    return console.info(`Arreglo original: [${arreglo}]\nValor mayor: [${Math.max(...arreglo)}]\nValor Menor: [${Math.min(...arreglo)}]`)

}
MinMax()
MinMax(false)
MinMax([])
MinMax([1, 4, 5, 99, true])
MinMax([1, 4, 5, 99, -60])

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
 

const ParImpar = (arreglo = undefined) =>{
    if (arreglo === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if (!(arreglo instanceof Array)) return console.error('El valor que ingresaste no es un arreglo')
    if (arreglo.length === 0) return console.error('El arreglo esta vacio ')

    for (const num of arreglo) {
        if (typeof num !== 'number') return console.error(`El valor ${num} ingresado, No es un numero`)
    }

    return console.info({
        pares: arreglo.filter(num => num % 2 === 0),
        impares: arreglo.filter(num => num % 2 === 1)
    })
}
ParImpar()
ParImpar('3')
ParImpar([])
ParImpar([1,2,3,4,5,6,7,8,9,0])
