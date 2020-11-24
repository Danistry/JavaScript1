const registro = (profesional,name, typemascota, fecha, diagnostico, medicamento) =>{
    return {
        profesional,
        name, 
        typemascota, 
        fecha, 
        diagnostico, 
        medicamento
    }
}
let animal = []
animal.push(registro('Juan pedrozo','pichichu','perro',21/11/2020,'saludable',false))
animal.push(registro('mauro Mayor','michi','gato',11/11/2020,'estable',false))
animal.push(registro('milton','mishi','gato',12/12/2020,'grave',true))
animal.push(registro('Daniel Ojeda','perico','ave',03/11/2020,'saludable',false))

function animales(animal, animalito) {
    let count = 0
    for (let i = 0; i < animal.length; i++) {
        if (animalito == animal[i]['typemascota']) {
            count++
        }
    }
return console.log(`El tipo de animal ${animalito}, se han atentito un total de ${count}`);
}
animales(animal, 'gato')