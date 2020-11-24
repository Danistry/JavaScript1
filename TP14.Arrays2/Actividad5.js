function descendente(valores) {
    let cambio = [];
    for (let i=0; i < (valores.length-1); i++){
        for (let j = 0; j < (valores.length - i - 1); j++){
            if (valores[j] > valores[j + 1]){
                cambio = valores[j];
                valores[j] = valores[j + 1];
                valores[j + 1] = cambio;
            }
        }
    }
    return valores;
}
console.log(descendente([1.5,2.5,50.60,10.6,9.6]));