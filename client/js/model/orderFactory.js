myApp.factory('orderFactory',function($http){
	var factory={};
	var orders=[];

	factory.getOrders=function(callback){
		$http.get('/orders').success(function(output){
			orders=output;
			callback(orders);
		});
	}

	factory.addOrder=function(new_order,callback){
		$http.post('/addOrder',new_order).success(function(output){
			orders=output;
			callback(orders);
		})
	}
	return factory;
})