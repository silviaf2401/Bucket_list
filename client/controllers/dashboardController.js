myApp.controller('dashboardController', function($scope, $location, dashboardFactory, bucketFactory){

	var user;

	var other;

	dashboardFactory.getUser(function(data){
		user = data;
		console.log(user);
		$scope.user = user[0].name;
	})

	$scope.logout = function(data){
		dashboardFactory.logoutUser(function(data){
			console.log("successful logout");
			$location.path("/");
		})
	}


	bucketFactory.getItems($scope.user, function(data){
		console.log("reached getItems on dashboardcontroller");
		$scope.items = data.data;
	})

	bucketFactory.getNames($scope.user, function(data){
		console.log("reached getNames on dashboardcontroller");
		$scope.names = data;
	})

	$scope.add = function(){
		console.log("reached add on dashboardcontroller");
		$scope.item.name = $scope.user;
		$scope.item.done = false;
		if(!$scope.item.friend){
			$scope.item.friend = $scope.user;
		} else {
			var name = $scope.item.name;
			$scope.item.friend = $scope.item.friend.name;
			var friend = $scope.item.friend;
			other = {
				name: friend,
				title: $scope.item.title,
				description: $scope.item.description,
				friend: name,
				done: false
			}
		}
		console.log("other", other);
		bucketFactory.addItem2(other, function(data){
			console.log(data);
		})
		bucketFactory.addItem($scope.item, function(data){
			console.log(data);
			bucketFactory.getItems($scope.user, function(data){
			console.log("getItems on controller");
			$scope.items = data.data;
			$scope.item = {};
	})
		})
	}
	$scope.done = function(id){
		console.log('got to done!');
		bucketFactory.done(id, function(data){
			bucketFactory.getItems($scope.user, function(data){
			console.log("reched getItems on dashboardcontroller, bucjetfactory");
			$scope.items = data.data;
			$scope.item = {};
		})
		})
	}


	
})