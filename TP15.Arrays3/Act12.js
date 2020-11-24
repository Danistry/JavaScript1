let vec = "Persiana americana. Corazón delator. Crimen";
function revers(vec) {

const a = vec.split(".").reduce((acc, item) => {return item + "." + acc});
console.log(`Oracion invertida:${a}`)
}
revers(vec);
