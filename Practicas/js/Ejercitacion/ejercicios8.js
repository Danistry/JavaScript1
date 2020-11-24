/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en 
forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
const order = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if (!(arreglo instanceof Array)) return console.error('El valor que ingresaste no es un arreglo')
    if (arreglo.length === 0) return console.error('El arreglo esta vacio ')

    for (const num of arreglo) {
        if (typeof num !== 'number') return console.error(`El valor ${num} ingresado, No es un numero`)
    }

    let ascendente = arreglo.sort(function (a, b) {
        return a - b
    });
    //let descendente = arreglo.reverse()
    return console.log({
        ascendente,
        //descendente
    })
}
order()
order(true)
order([])
order([1, 2, 'Hola'])
order([7, 5, 7, 8, 6])
console.log();

const ordenarArreglo = (arreglo = undefined) =>{
    if (arreglo === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if (!(arreglo instanceof Array)) return console.error('El valor que ingresaste no es un arreglo')
    if (arreglo.length === 0) return console.error('El arreglo esta vacio ')

    for (const num of arreglo) {
        if (typeof num !== 'number') return console.error(`El valor ${num} ingresado, No es un numero`)
    }

    return console.info({
        arreglo,
        ascendente: arreglo.map(el => el).sort(),
        descendente: arreglo.map(el => el).sort().reverse()
    })
}
ordenarArreglo()
ordenarArreglo(false)
ordenarArreglo([7, 5, 7, 8, false])
ordenarArreglo([7, 5, 7, 8, 6])
/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/
const unicos = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if (!(arreglo instanceof Array)) return console.error('El valor que ingresaste no es un arreglo')
    if (arreglo.length === 0) return console.error('El arreglo esta vacio ')

    function valorUnico(value, index, self) {
        return self.indexOf(value) === index;
    }
    let res = arreglo.filter(valorUnico)
    return console.log(res)
}
unicos()
unicos(false) 
unicos([]) 
unicos(["x", 10, "x", 2, "10", 10, true, true])
console.log();
/*26) Programa una función que dado un arreglo de números obtenga el promedio,
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
const sumatoria = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if (!(arreglo instanceof Array)) return console.error('El valor que ingresaste no es un arreglo')
    if (arreglo.length === 0) return console.error('El arreglo esta vacio ')

    for (const num of arreglo) {
        if (typeof num !== 'number') return console.error(`El valor ${num} ingresado, No es un numero`)
    }
    let res = arreglo.reduce(function (a, b) {
        return a + b
    }, 0)
    let total = res / arreglo.length
    return console.log(total);
}

sumatoria()
sumatoria('Hola')
sumatoria([9, 8, 7, 6, 5, 4, 3, 2, 1, true])
sumatoria([])
sumatoria([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])