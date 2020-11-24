const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numero.length; i++) {
    if (i%2!=0) {
        continue;
    }
    console.log("Numeros impares: " +numero[i])
}
console.log('');
for (let i = 0; i < numero.length; i++) {
    if (i %2 === 0) {
        continue;
    }
    console.log('Numeros Pares: ' +numero[i]);
} 


