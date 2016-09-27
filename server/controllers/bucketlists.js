var mongoose = require('mongoose');
var bucket = mongoose.model('bucketlistdatabase');
var namedatabase = mongoose.model('userDb');

module.exports = (function() {
	return {
		addItem: function(req,res){
			item = new bucket(req.body);
			item.save(function(err, item){
				if(err){
					console.log(err);
				} else {
					res.json(item);
				}
			})
		},

		loginName: function(req,res){
			name = new namedatabase(req.body);
			name.save(function(err, item){
				if(err){
					console.log(err);
					res.json(item);
				} else {
					res.json(item);
				}
			})
		},
		getItems: function(req, res){
			bucket.find({name: req.params.name}, function(err, mongooses){
				if(err){
					console.log(err);
				} else {
					res.json(mongooses);
				}
			})
		},

		getItemsDone: function(req, res){
			bucket.find({$and:[{name: req.params.name}, {done:true}]}, function(err, mongooses){
				if(err){
					console.log(err);
				} else {
					console.log("got items!");
					res.json(mongooses);
				}
			})
		},

		getItemsNotDone: function(req, res){
			bucket.find({$and:[{name: req.params.name}, {done:false}]}, function(err, mongooses){
				if(err){
					console.log(err);
				} else {
					res.json(mongooses);
				}
			})
		},

		getNames: function(req, res){
			namedatabase.find({name:{$ne: req.params.name}}, function(err, mongooses){
				if(err){
					console.log(err);
				} else {
					res.json(mongooses);
				}
			})
		},
		done: function(req, res){
			bucket.findOne({_id: req.params.id}, function(err, bucket){
				if(err){
					console.log(err);
				} else {
					bucket.done = true;
					bucket.save(function(err,data){
						if(err){
							console.log(err);
						} else {
							console.log("updated successfully");
						}
					})
					
				}
			})
		}
	}
})();