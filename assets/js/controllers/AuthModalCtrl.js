oceanGame.controller('AuthModalCtrl', ['$scope', 'UserService', '$http', '$modalInstance', 'AlertService', function($scope, UserService, $http, $modalInstance,AlertService){
	$scope.loginData={email:'testperson@gmail.com',password:'test'};
	$scope.signupData={userName:'',password:'',email:'',passwordConfirmation:'',url_Id:'',server:'',farm:'',secret:''};

	$scope.login = function(){
		UserService.login($scope.loginData.email,$scope.loginData.password,
			function(err,data){
				if(err){
					alert("err")
				}else if(data.user){
					$modalInstance.close();
				}else{
					alert("Incorrect login information - please try again")
				}

		});
	};

	$scope.signup= function(){
		if($scope.signupData.password != $scope.signupData.passwordConfirmation){
			alert('Passwords do not match - please try again')
			return;
		}
		var signupData = {
			email:$scope.signupData.email,
			password:$scope.signupData.password,
			userName:$scope.signupData.userName,
			firstName:$scope.signupData.firstName,
			url_Id:'',
			server:'',
			farm:'',
			secret:''
		}
		$http.post('/api/user', signupData)
		.success(function(data){
			AlertService.add('success','Your profile has been created');
			// if(data.user){
				$modalInstance.close();
			// }
		}).error(function(err){    
			AlertService.add('danger', "There was an error with your signup - please try again");
			// if(data.user){
				$modalInstance.close();
		})
	}
}])