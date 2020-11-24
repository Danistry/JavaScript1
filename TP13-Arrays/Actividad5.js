function pos20(vector) {

    for (let i = 0; i <= 20; i++) {
        vector = prompt('Ingrese un valor: ');
        console.log([vector]);
    }
    for (let i = 0; i <= 20; i++) {
        if (vector[i] % 3 == 0) {
            console.log(`Valor: ${vector[i]}, posicion ${i}`);
        }

    }
}
pos20();