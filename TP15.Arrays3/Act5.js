let vector = ["Hola", "Mundo", "onda"];
let word = "Mundo";
function exist(vector, word) {

    let pos = -1
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === word) {
            pos = i
        }
    }
    if (pos !== -1) {
        vector.splice(pos,1)
    } else{
        vector.unshift(word)
    }
return vector
}
console.log(exist(vector, word));
