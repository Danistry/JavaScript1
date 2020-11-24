function calcularPromedio() {
    
    let total = 0;

    for (let i = 0; i < cantidades.length; i++) {
        total = total + cantidades[i];
    }
    total = parseInt((total / 31));
    return total;
}
calcularPromedio(cantidades);
