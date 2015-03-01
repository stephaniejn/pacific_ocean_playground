oceanGame.controller('HomeCtrl', ['$scope','$http','$modal','AlertService','$location','UserService', '$routeParams', 'gameFactory','cardgameFactory', function($scope,$http,$modal,AlertService,$location,UserService,$routeParams,gameFactory,cardgameFactory){

	$scope.UserService = UserService;
	$scope.$watchCollection('UserService',function(){
		$scope.currentUser = UserService.currentUser;
	})

	$scope.api_data = {
		input:""
	}

	$scope.users = []

	var self=this;

	$scope.existing_user = false

	$http.get('/api/user')
	.success(function(data){
		for( var i = 0; i<data.length; i++ ){
			$scope.users = data
			console.log(data[i].total)
			if(data[i].total){
				$scope.existing_user = true
			}	
		}
	})
	
}])