var notas = []
function ingresarDatos() {
    for (let i = 0; i < 15; i++) {
        notas.push(prompt('Ingrese la calificacion: '))
    }
    return (notas);
}
function procesarNotas(promedios) {
    let promedio = 0.0;
    let nota_baja = 11
    let nota_alta = -1;
    let cantAprobs = 0;
    let cantDes = 0;

    for (let i = 0; i < 15; i++) {
        if (promedio[i] < nota_baja) {
            nota_baja = promedio[i];
        }
        if (promedio[i] > nota_alta) {
            nota_alta = promedio[i];
        }
        if (promedio[i] >= 6) {
            cantAprobs++;
        } else {
            cantDes++;
        }
        promedio +=promedios[i];

    }
console.log(`Promedio general: ${promedio/15}`);
console.log(`Nota mas baja: ${nota_baja}`);
console.log(`Nota mas alta: ${nota_alta}`);
console.log(`Cantidad de Aprobados ${cantAprobs}`);
console.log(`Cantidad de Desaprobados ${cantDes}`);
}
ingresarDatos();
procesarNotas(notas);