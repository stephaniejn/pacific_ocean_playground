oceanGame.controller('MainNavCtrl', ['$scope', '$location', '$modal', 'UserService', function($scope, $location, $modal, UserService){
	$scope.navCollapsed=true;
	$scope.UserService = UserService;
	$scope.$watchCollection('UserService',function(){
		$scope.currentUser = UserService.currentUser;
	})

	$scope.isActive = function(url){
		return url == $location.path();
	};
	$scope.showLogin = function(){
		$modal.open({
			templateUrl:'/views/login.html',
			controller: 'AuthModalCtrl'
		})
	};

	$scope.showSignup = function(){
		$modal.open({
			templateUrl:'/views/signup.html',
			controller: 'AuthModalCtrl'
		})
	};

	$scope.logout = function(){
		UserService.logout(function(err,data){

		});
	}
}])