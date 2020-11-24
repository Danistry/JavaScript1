function nombre(vector) {
    let name = '';
    let temporal = '';
    for (let i = 0; i < vector.length; i++) {//Itera el array
        if (vector[i].includes(' ')) {
            vector[i] = vector[i].split(' ')

            for (let j = 0; j < vector[i].length; j++) {//Vuelve a iterar pero al momento guarda un guion entre cada palabra
                temporal += (`-${vector[i][j]}`);
            }
            name += temporal
        } else {
            name += (`-${vector[i]}`);
        }

    }
    name = name.replace('-', ' ');
    return name;
}
console.log(nombre(['Fashion', 'Ropa comoda', 'Start']))