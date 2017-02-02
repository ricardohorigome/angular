angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, contatosAPI, operadorasAPI, serialGenerator){
	$scope.app = "List Telefonica";
	//altera valor original, mas mais perfomatico....
	//$filter('uppercase')("Pedro")
	$scope.contatos = [];
	$scope.operadoras = [];
	// [
	// 	{nome: $filter('uppercase')("Pedro"), telefone: "9998885566", operadora: {nome: "VIVO", codigo: 99, categoria: "Celular"},cor: "red", data: new Date()},
	// 	{nome: "Maria", telefone: "9998885555", operadora: {nome: "TIM", codigo: 15, categoria: "Celular"}, cor: "blue", data: new Date()},
	// 	{nome: "Juliana", telefone: "9998885544", operadora: {nome: "OI", codigo: 14, categoria: "Celular"}, cor: "green", data: new Date()}					
	// ];
	var carregarContatos = function(){
		contatosAPI.getContatos().then(function(response){						
			$scope.contatos = response.data;
		}, function(response){
			$scope.message = "ERRO: "+response.data;
		});					
	};

	var carregarOperadoras = function(){
		operadorasAPI.getOperadoras().then(function(response){						
			$scope.operadoras = response.data;
		}, function(response){
			$scope.message = "ERRO: "+response.data;
		});					
	}

	// $scope.adicionarContato = function(contato){
	// 	$scope.contatos.push(angular.copy(contato));
	// 	delete $scope.contato;
	// 	$scope.contatoForm.$setPristine();
	// }
	$scope.adicionarContato = function(contato){		
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato(contato).then(function(response){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		}, function(response){
			$scope.message = "ERRO: "+response.data;
		});
	}

	$scope.apagarContatos = function(contatos){					
		$scope.contatos = contatos.filter(function(contato){
			if (!contato.selecionado)return contato;
		})					
	}
	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});

	}
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	}

	carregarContatos();
	carregarOperadoras();
});