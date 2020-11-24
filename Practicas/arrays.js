const a = [];
const b = [1, true, "Hi",["A","B","C"]];
console.log(b);
console.log(b[3][2]);

const c = Array.of("x","y","z",8,9);
console.log(c);

const d = Array(100).fill(false);
console.log(d);

const colours = ["Rojo", "Verde", "Azul"];
colours.push("WHITE");
colours.pop();
console.log(colours);

colours.forEach(function (el,index) {
    console.log(`<li id="${index}">${el}</li>`)
});
