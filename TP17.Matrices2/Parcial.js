let a1 = [2008, 1570, 950, 2466, 3271, 2498, 2526, 2344, 2001, 1789, 1452, 1435, 1339, 1237, 9340,
    1349, 1495, 3482, 1492, 5986, 9873, 7465, 7564, 1231, 1394, 5869, 9283, 7564, 4832, 4234];

function parcial() {
    let temporal, temporal_dos = 0
    let res = false
    for (let i = 0; i < a1.length / 2; i++) {
        temporal = temporal + a1[i]
    }
    for (let j = 0; j < a1.length / 2; j++) {
        temporal_dos = temporal_dos + a1[j]
    }
    let first15 = temporal / (a1.length / 2)
    let second15 = temporal_dos / (a1.length / 2)
    if (first15 > second15) {
        res = true
    }
    return res
}
console.log(parcial(a1));

let matrizOrigen = new Array(4);
matrizOrigen[0] = ['Sonic', 15, 30, 24];
matrizOrigen[1] = ['Parasite', 25, 50, 26];
matrizOrigen[2] = ['El robo del siglo', 25, 20, 38];
matrizOrigen[3] = ['Bloodshot', 30, 30, 62];

function parcial(matrizOrigen) {
    let res = [];
    for (let i = 0; i < matrizOrigen.length; i++) {
        let temp = Math.abs(matrizOrigen[i][1] - matrizOrigen[i][3]);
        res.push(temp);
    }
    return (res)
}

console.log(parcial(matrizOrigen));

