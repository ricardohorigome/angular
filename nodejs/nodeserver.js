var http = require('http');
var express  = require('express');
var app      = express(); 

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));  

var serverport = 8180;
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello Node.JS!');
// }).listen(8180);
// Add headers

var contatos = [
					{nome: "Pedro", telefone: "9998885566", data: 1483236000000, operadora: {nome: "VIVO", codigo: 99, categoria: "Celular"},cor: "red"},
					{nome: "Maria", telefone: "9998885555", data: 1483236000000, operadora: {nome: "TIM", codigo: 15, categoria: "Celular"}, cor: "blue"},
					{nome: "Juliana", telefone: "9998885544", data: 1483236000000, operadora: {nome: "OI", codigo: 14, categoria: "Celular"}, cor: "green"}					
				];
var operadoras = [
		{nome: "OI", codigo: 14, categoria: "Celular", preco: 1},
		{nome: "TIM", codigo: 15, categoria: "Celular", preco: 2 },
		{nome: "VIVO", codigo: 99, categoria: "Celular", preco: 3},
		{nome: "GVT", codigo: 88, categoria: "Fixo", preco: 4},
		{nome: "Embratel", codigo: 77, categoria: "Fixo", preco: 5}
	];				

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/api/contatos", function(req, res){
	res.json(contatos);
	// res.send(JSON.stringify(contatos));
});

app.post("/api/contatos", function(req, res){
	var contato = req.body;
	contatos.push(contato);
	res.json(contato);
});

app.get("/api/operadoras", function(req, res){
	res.json(operadoras);	
});

app.listen(serverport);
console.log('Server running at http://localhost:'+serverport+'/');