var db = require('../models');


exports.getData = function(req, res) {
	db.datas.find()
	.then( function(datas){
		res.json(datas);	
	})
	.catch( function(err){
		res.send(err)
	});	
}

exports.createData = function(req, res) {
		db.Data.create(req.body)
	.then( function(newData){
		res.json(newData);	
	})
	.catch( function(err){
		res.send(err)
	});	
}

exports.deleteData = function(req, res) {
	db.Data.remove({})
	.then( function(){
		res.json({message: 'Data is wiped'});	
	})
	.catch( function(err){
		res.send(err)
	});	
}