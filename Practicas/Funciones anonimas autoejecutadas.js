(function() {
	console.log('Mi primer IIFE')
})();
//Funciona en la consola de google
(function(d,w,c) {
	console.log('Mi SEGUNDO IIFE');
	console.log();
	c.log('consola')
})(document, window, console);

