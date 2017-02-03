angular.module("listaTelefonica").filter("elipsis", function(){
	return function(input, size){		
		size = (size || 2);
		if (input.length <= size){
			return input;
		}
		var output = input.substring(0, size )+'...';
		return output;
	};
});