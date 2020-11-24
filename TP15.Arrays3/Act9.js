let v1 = ['Buenos dias']
let v2 = ['Buenas noches']
function bool(v1, v2, booleano) {
    let arr = [];
    if (booleano == true) {
        arr = v1.concat(v2)
    } else if (booleano == false) {
        arr = v2.concat(v1)
    }
    return console.log(arr)
}
bool(v1, v2, false)