let vector = [5, 7, 9, 2, 4, 6, 8, 3, 10, 1];
function billetes(vector) {
    let arr = [];
    for (let i = 0; i < vector.length; i++) { //Agrega los numeros al array
        arr.push(vector[i]);
    }
    console.log(`Numeros ingresados ${arr}`);
    console.log('');

    for (let i = 0; i < vector.length; i++) {//Aca los elimina 1 a 1 y los va imprimiendo
        vector.splice()
        console.log(`Eliminando elementos... ${vector[i]}`);
    }
    console.log('');
    console.log('Elementos eliminados!');
}
billetes(vector);
