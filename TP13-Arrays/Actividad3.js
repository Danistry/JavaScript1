function multiple(vector, n) {
    for (let i = 0; i <= 20; i++) {
        vector.push(i * n);
    }
    return console.log(`Los multipos de ${n} son: ${vector}`);
}
multiple([1, 2, 3, 4, 5, 6, 7, 8], 3)