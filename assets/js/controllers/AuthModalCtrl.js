oceanGame.controller('AuthModalCtrl', ['$scope', 'UserService', '$http', '$modalInstance', 'AlertService', function($scope, UserService, $http, $modalInstance,AlertService){
	$scope.loginData={email:'',password:''};
	$scope.signupData={userName:'',password:'',email:'',passwordConfirmation:''};

	$scope.login = function(){
		UserService.login($scope.loginData.email,$scope.loginData.password,
			function(err,data){
				if(err){
					alert(err)
				}else if(data.user){
					$modalInstance.close();
				}else{
					alert(data.err)
				}

		});
	};

	$scope.signup= function(){
		if($scope.signupData.password != $scope.signupData.passwordConfirmation){
			alert('wrong password')
			return;
		}
		var signupData = {
			email:$scope.signupData.email,
			password:$scope.signupData.password,
			userName:$scope.signupData.userName
		}
		$http.post('/api/user', signupData)
		.success(function(data){
			AlertService.add('success','Your profile has been creaated');
			// if(data.user){
			// 	$modalInstance.close();
			// }
		}).error(function(err){
			alert(err)
		})
	}
}])