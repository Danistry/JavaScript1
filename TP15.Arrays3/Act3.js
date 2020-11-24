let array = ["Dario Martinez", "Daniel Ojeda", "Nieves Antonella"];

function ChoriParaTodos(array, name) {
    let flag = false
    for (let i = 0; i < array.length; i++) {//Aqui recorre el array para encontrar si existe el  parametro ingresado
        flag = array.includes(name)
    }
    if (flag === true) { //Se evalua si esta y se imprime
        console.log(`La persona ${name} SI vota aquí`)
    } else {
        console.log(`La persona ${name} NO vota aquí`)
    }
}

ChoriParaTodos(array, 'Daniel Ojeda');
