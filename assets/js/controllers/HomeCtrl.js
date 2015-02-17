oceanGame.controller('HomeCtrl', ['$scope','$http','$modal','AlertService','$location','UserService', '$routeParams', 'gameFactory', function($scope,$http,$modal,AlertService,$location,UserService,$routeParams,gameFactory){

	$scope.UserService = UserService;
	$scope.$watchCollection('UserService',function(){
		$scope.currentUser = UserService.currentUser;
	})
	
}])