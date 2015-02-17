oceanGame.controller('ProfileCtrl', ['$scope','$http','$modal','AlertService','$location','UserService', '$routeParams', 'gameFactory', function($scope,$http,$modal,AlertService,$location,UserService,$routeParams,gameFactory){

	$location.path( "/" );

	$scope.UserService = UserService;
	$scope.$watchCollection('UserService',function(){
		$scope.currentUser = UserService.currentUser;
	})
	
}])