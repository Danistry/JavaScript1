let nombre='Daniel',edad=24;

const persona={
    nombre: nombre,
    edad:edad,
    hablar: function () {
        console.log('Joder gente');
    }
}

console.log(persona);
persona.hablar();

const person={
    nombre,
    edad,
    hablar2() {
        console.log('Joder gente,me cago en todo');
    }
}
console.log(person);
person.hablar2();
