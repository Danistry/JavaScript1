//console.log(Date());

let fecha = new Date()
console.log(fecha);
//Dia del mes
console.log(fecha.getDate());
//Dia de la semana
console.log(fecha.getDay());
//mes
console.log(fecha.getMonth());
//Año
console.log(fecha.getFullYear());
//Hora
console.log(fecha.getHours());
//Minutos
console.log(fecha.getMinutes());
//Segundos
console.log(fecha.getSeconds());
//text
console.log(fecha.toString());
console.log(fecha.toDateString());
//Hora local
console.log(fecha.toLocaleString());
//fecha
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
//Hora de otro lugar
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
//metodo now
console.log(Date.now());