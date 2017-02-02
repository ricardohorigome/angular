angular.module("listaTelefonica").factory("contatosAPI", function($http,config){

	var _getContatos = function(){
		return $http.get(config.baseUrl+"/api/contatos");
	};

	var _saveContato = function(contato){
		return $http.post(config.baseUrl+"/api/contatos", contato);
	}

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
})