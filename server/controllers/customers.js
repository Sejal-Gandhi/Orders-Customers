var mongoose=require('mongoose');
var Customer=mongoose.model('Customer');

module.exports=(function(){
	return{
		show:function(req,res){
			Customer.find({},function(err,results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
		},
		add:function(req,res){
			console.log('Hello from add customer!',req.body.name,req.body.created_at);
			var new_customer=new Customer({name:req.body.name,created_at:req.body.created_at});
			new_customer.save(function(err){
				if(err){
					console.log('Fail to add to Customer database!');
				}else{
					console.log('Successfully added to the Customer Database');
					module.exports.show(req,res);
				}
			})
		},
		remove:function(req,res){
			console.log('Hello from remove cusstomer!',req.body._id);
			Customer.remove({_id:req.body._id},function(err){
				if(err){
					console.log('Can\'t remove it from Customer DB');
				}else{
					console.log('Successfully removed from Customer DB');
					module.exports.show(req,res);
				}
			})
		}
	}
})();