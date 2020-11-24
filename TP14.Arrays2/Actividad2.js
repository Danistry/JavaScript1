let array=[1.5,2.2,4.5,3.1,2.5,3.3,1.6,2.2,4.1,1.3,3.1]

function promedio(array){
	let promPeso=0
	for(let i=0; i<array.length; i++){
		promPeso+=array[i]
	}
	promPeso=promPeso/array.length
	return(promPeso.toFixed(2))
}
console.log(promedio(array));