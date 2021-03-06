App.controller('AgenteCtrl', function($scope, AgenteService, $route,$routeParams,$location,EnvioService){
	//$scope.agente = [];
	$scope.agenteEditar = {};
	//$scope.agente = {};
	

	$scope.notFound = false;
	AgenteService.list().then(function(data){
		$scope.agente = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});
	$scope.agenteEditar = EnvioService.getParametro();
	
//	$scope.deletar = function(id){
//		AgenteService.delete(id).then(function(data){
//			console.log(data);
//			$route.reload();
//		});	
//	}
//	
	$scope.salvar = function(agente){
		var agenteTmp = {
				nome: agente.nome,
				dtContratacao: agente.dtContratacao,
				tempoServico: agente.tempoServico,
				cpf: agente.cpf
		};
		
		AgenteService.create(agenteTmp).then(function(data){
			$route.reload();
		});
	}
	
	$scope.editar = function(item){
		$scope.agenteEditar = {};
		EnvioService.addParametro(item);
		$location.path('/editarAgente');
	}

	$scope.atualizar = function(item){
		AgenteService.update(item, item.idAgente).then(function(data){
				$location.path('/');
		});
	}
	
});