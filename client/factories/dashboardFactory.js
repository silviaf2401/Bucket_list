myApp.factory('dashboardFactory', function($http){

	var user = [];

	var polls = [];

	var factory = {};

	factory.loginUser = function(data, callback){
		user.push(data);
		console.log("login data: ", data);
		$http.post('/login',data).then(function(data){
		callback(console.log(user));
	})
	}

	factory.logoutUser = function(callback){
		user = [];
		callback();
	}

	factory.getUser = function(callback){
		console.log("user in getUser", user);
		callback(user);
	}

	factory.getDummies = function(callback){
		$http.get('/dummies').then(function(data){
			mongooses = data.data;
			callback(data.data);
		});
	}


	factory.addPoll = function(info, callback){
		$http.post('/polls', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				polls.push(data);
				callback(polls);
			}
		})
	}

	return factory;
})