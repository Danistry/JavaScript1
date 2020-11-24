let vector=[13, 12, 15, 4, 2, 10, 14, 19, 2, 18, 5, 6, 14, 3, 12, 20, 7, 11, 10, 2, 17, 7, 9, 17, 9, 8, 8, 3, 12];

function ventas(vector){
	function mayor(vector){
		let diaMayor = 0;
		let temp=0;
		for(let i=0; i<vector.length; i++){
			if(i==0){
				diaMayor=i;
				temp=vector[i];
			}else if(vector[i]>temp){
				diaMayor=i;
				temp=vector[i];
			}
		}
		return(diaMayor);
	}
	function menor(vector){
		let diaMenor = 0;
		let temp=0;
		for(let i=0; i<vector.length; i++){
			if(i==0){
				diaMenor=i;
				temp=vector[i];
			}else if(vector[i]>temp){
				diaMenor=i;
				temp=vector[i];
			}
		}
		return(diaMenor);
	}
	let dias =[mayor(vector), menor(vector)];
	return(dias);
}
console.log(ventas(vector))