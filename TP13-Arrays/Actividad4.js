function multiploMult(vec, valor, cant) {

    if (valor == 0) {
        vec.push(0);
    } else {
        for (var i = 0; i < cant; i++) {
            vec.push(valor * i);
        }
        return console.log(`Sus multiples son: ${vec}`);
    }
}
let x = 0;
let n = 0;
let vector1 = [];

x = prompt('Ingrese cantidad de múltiplos: ');
n = prompt('Ingrese número: ');

while (x != 0) {
    multiploMult(vector1, n, x);
    x = prompt('Desea calcular otro multiplo?,ingrese: ');
    n = prompt('Ingrese el multiplicador: ');
}