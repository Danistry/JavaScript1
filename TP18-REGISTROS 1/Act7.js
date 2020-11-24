const total = (title, name, precio, venta) => {
    return {
        title,
        name,
        precio,
        venta
    }
}

let cuadros = []

cuadros.push(total('La mona Lisa', 'Alberti Noso', 1985695, false))
cuadros.push(total('La niña', 'Manolo', 250668, true))
cuadros.push(total('El scream', 'Panchito', 986458, true))

function ventas(cuadros) {
    let res = 0
    for (let i = 0; i < cuadros.length; i++) {
        if (cuadros[i]['venta'] == true) {
            res += cuadros[i]['precio'];
        }
    }
return console.log(`El resultado de ventas seria ${res}`);
}
ventas(cuadros)
