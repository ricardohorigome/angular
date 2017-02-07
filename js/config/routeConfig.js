angular.module("listaTelefonica").config( function ($routeProvider) {	
	// console.log('routeProvider');
	
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller: "listaTelefonicaCtrl"
	}).otherwise({
          redirectTo: '/'
    });
});