angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
	// console.log(serialGeneratorProvider.setLength(10));
	serialGeneratorProvider.setLength(5);
	//serialGeneratorProvider.setLength(100);
});