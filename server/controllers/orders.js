var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return{
		show: function(req, res){
			Order.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
		}, 

		add: function(req, res){
			console.log('hello from add orders!!!', req.body.name, req.body.product, req.body.qty, req.body.created_at);
			var new_order = new Order({name: req.body.name, product: req.body.product, qty: req.body.qty, created_at: req.body.created_at});
			new_order.save(function(err){
				if(err){
					console.log('fail to add to database!');
				}else{
					console.log('successfully added to the database');
					module.exports.show(req, res);
				}
			});
		}
	}
})();