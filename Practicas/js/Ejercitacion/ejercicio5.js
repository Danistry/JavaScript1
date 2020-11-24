/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
miFuncion(100,2) devolverá 4 base 10.*/


const miFuncion = (num = undefined, base = undefined) => {
    if (!num) return console.warn('No ingresaste ningun numero')
    if (typeof num !== 'number') return console.warn(`El valor ${num} ingresado, NO es un numero`)
    if (!base) return console.warn('No ingresaste ninguna base')
    if (typeof base !== 'number') return console.warn(`El valor ${base} ingresado, NO es un numero`)

    if (base === 2) {
        return console.info(`${num} base ${base} = ${parseInt(num, base)} base 10`)
    } else if (base === 10) {
        return console.info(`${num} base ${base} = ${(num.toString(base))} base 2`)
    } else {
        return console.error(`El tipo de base a convertir NO es valido`)
    }
}
miFuncion()
miFuncion("100", 2)
miFuncion(100,)
miFuncion(100, '2')
miFuncion(100, 2)
miFuncion(1110010, 2)
miFuncion(4, 10)
miFuncion(4, 3)

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. 
miFuncion(1000, 20) devolverá 800.*/

const miFuncion = (monto = undefined, desc = 0) => {
    if (!monto) return console.warn('No ingresaste ningun monto')
    if (typeof monto !== 'number') return console.warn(`El valor ${monto} ingresado, NO es un numero`)
    if (!desc) return console.warn('No ingresaste ningun descuento')
    if (typeof desc !== 'number') return console.warn(`El valor ${desc} ingresado, NO es un numero`)
    if (monto === 0) return console.log('El monto no puede ser O')
    if (Math.sign(monto) === -1) return console.error('El monto no puede ser negativo')
    if (Math.sign(desc) === -1) return console.error('El descuento no puede ser negativo')

    return console.info(`$${monto} - ${desc}% = $${monto - ((monto * desc) / 100)}`)
}
miFuncion()
miFuncion("40", 20)
miFuncion(1000,)
miFuncion(1000, '20')
miFuncion(0, 20)
miFuncion(-1000, 20)
miFuncion(1000, -20)
miFuncion(1000, 25)
/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const calcularAños = (fecha = undefined) => {
    if (fecha === undefined) return console.warn('No ingresaste ninguna fecha')
    if (!(fecha instanceof Date)) return console.error('El valor que ingresaste no es una fecha valida')

    let HoyMenosFecha = new Date().getTime() - fecha.getTime()
        añosMs = 1000 * 60 * 60 * 24 * 365
        añosHumanoss = Math.floor(HoyMenosFecha / añosMs)

    return (Math.sign(añosHumanoss) === -1)
        ? console.info(`Faltan ${Math.abs(añosHumanoss)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(añosHumanoss) === 1)
            ? console.info(`Han pasado ${añosHumanoss} años, desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
} 

calcularAños()
calcularAños([])
calcularAños(new Date())
calcularAños(new Date(1984,4,23))
calcularAños(new Date(2021,7,3)) 

