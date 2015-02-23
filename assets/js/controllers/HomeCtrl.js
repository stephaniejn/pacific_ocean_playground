oceanGame.controller('HomeCtrl', ['$scope','$http','$modal','AlertService','$location','UserService', '$routeParams', 'gameFactory','cardgameFactory', function($scope,$http,$modal,AlertService,$location,UserService,$routeParams,gameFactory,cardgameFactory){

	$scope.UserService = UserService;
	$scope.$watchCollection('UserService',function(){
		$scope.currentUser = UserService.currentUser;
	})

	$scope.api_data = {
		input:""
	}

	$scope.showWeather = false

	$scope.weather = function() {
		$scope.showWeather = true
		   // var req = {
     //        url: '/api/data',
     //        params: {}
     //    }
    	$http.post('/api/data', $scope.api_data).success(function(data){
          $scope.data = data
        })
	}
	
}])