let vector = 'Hola mundo todo bien'
function arr(vector) {
    let r = [];
    let z = [];

    r = vector.split(' ')//convierte la oracion en un  array
    console.log(r)

    for (let i = 0; i < r.length; i++) {//itera el nuevo array r e imprime las posiciones pares
        if (i % 2 == 0) {
            z.push(r[i])
        }
    }
    return console.log(z)
}

arr(vector)

