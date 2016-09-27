myApp.controller('indexController', function($scope, $location, dashboardFactory){

	$scope.login = function(){
		console.log("got to login");
		dashboardFactory.loginUser($scope.name, function(data){
			$location.path('/dashboard');
		})
	}


})