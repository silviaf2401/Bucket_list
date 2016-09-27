var myApp = angular.module('Myapp', ['ngRoute', 'ngCookies']);
// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below. 



// this is our router. You can choose to set your controllers on the partial
// but I prefer to set my controllers here because it's cleaner
(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', 
			{
				controller: 'indexController',
				templateUrl: "partials/index.html"
			})
			.when('/dashboard', 
			{
				controller: 'dashboardController',
				templateUrl: "partials/dashboard.html"
			})
			.when('/view/:name', 
			{
				controller: 'viewController',
				templateUrl: "partials/view.html"
			})
			
	})
}());