angular.module("listaTelefonica").provider("serialGenerator", function(){
	this.$get = function(){
		var _lenght = 20;
		
		this.getLength = function(){
			return _length;
		}

		this.setLength = function(length){
			_length = length;
		}

		return {
			generate: function(){
				var serial = "";
				while(serial.length < _lenght){
					serial += String.fromCharCode(Math.floor(Math.random()*64) + 32);
				}
				return serial;
			}
		}
	}
});