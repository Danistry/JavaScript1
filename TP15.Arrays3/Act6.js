let vector = [2, 6, "Todo bien"];
/*function str(vector) {
    for (let i = 0; i < vector.length; i++) {
        if (typeof vector[i] === "string") {
            return console.log(`La palabra esta en la posicion ${i}`);
        }
    }
}
str(vector);*/
const str = (vector = '') => {
    for (let i = 0; i < vector.length; i++) {
        if (typeof vector[i] === "string") return console.log(`La palabra esta en la posicion ${i}`);
    }
}
str(vector)