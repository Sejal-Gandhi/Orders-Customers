myApp.controller('customersController',function(customerFactory,$scope){
	$scope.customers=[];
	$scope.dup_msg="";
	customerFactory.getCustomers(function(data){
		$scope.customers=data;
		console.log('customers from http:',$scope.customers);
	});

	$scope.addCustomer=function(){
		if($scope.isDuplicate()){
			$scope.dup_msg="can\'t add the name because it is already used!";
		}else{
			$scope.new_customer.created_at=new Date();
			customerFactory.addCustomer($scope.new_customer,function(data){
				$scope.customers=data;
				$scope.new_customer={};
			});
		}
	}

	$scope.deleteCustomer=function(customer){
		customerFactory.deleteCustomer(customer,function(data){
			$scope.customers=data;
		})
	}

	$scope.isDuplicate=function(){
		for(var i=0;i<$scope.customers.length;i++){
			if($scope.new_customer!=undefined){
				if($scope.new_customer.name==$scope.customers[i].name){
					$scope.dup_msg="name is already used!"
					return true;
				}
			}
		}
	return false;
	}
})