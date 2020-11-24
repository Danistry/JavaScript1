console.log('**********************************');
console.log('*Bievenido al sistema de decicion*');
console.log('**********************************');


let name = prompt('Como te llamas?')
let dia = prompt('Ingrese el dia de la semana que es: ');
function Activity(dia, name) {

    switch (dia) {
        case 'lunes':
            console.log(`Hoy toca estudiar ${name}`)
            break;
        case 'martes':
            console.log(`Hoy debes programar ${name}`);
            break;
        case 'miercoles':
            console.log(`Hoy debes estudiar ingles ${name}`)
            break;
        case 'jueves':
            console.log(`Programa por 3 horas ${name}`)
            break;
        case 'viernes':
            console.log(`Sal a ejercitar ${name}`);
            break;
        case 'sabado':
            console.log(`Sale lolsito ${name}`);
            break;
            case 'domingo':
            console.log(`Descanso de la semana ${name}`)
            break;
        default:
            break;
    }
}
Activity(dia, name)