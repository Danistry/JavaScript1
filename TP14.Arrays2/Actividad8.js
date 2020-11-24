let names = ["Carlos María", "Jessica Yolanda", "Mario Raul", "Dahiana Pamela"];
let deudas = [3.600, 21.543, 0, 8.145,];
function clinica(names, deudas) {
	let perDeudas = [];

	for (let i = 0; i < deudas.length; i++) {
		if (deudas[i] != 0) {
			perDeudas.push(names[i]);
		}
	}
	return console.log(`Personas con deudas: ${perDeudas}`);
}
console.log(' ');
clinica(names, deudas);

function alcorriente(name, deudas) {
	let corriente = [];
	for (let i = 0; i < deudas.length; i++) {
		if (deudas[i] == 0) {
			corriente.push(names[i]);
		}
	}
	return console.log(`Personas al dia con el pago: ${corriente}`);
}
console.log(' ');
alcorriente(names, deudas);
//parte 2

function informe(names, deudas) {
	let prom = 0;
	let res = [];
	for (let i = 0; i < deudas.length; i++) {
		prom += deudas[i];
	}
	prom = prom / deudas.length

	for (let i = 0; i < deudas.length; i++) {
		if (deudas[i] > prom) {
			res.push(names[i])
		}
	}
	return console.log(`La persona con deuda mas alta es: ${res}`);
}
console.log(' ');
informe(names, deudas);