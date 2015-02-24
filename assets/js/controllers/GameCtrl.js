oceanGame.controller('GameCtrl', ['$scope','$http','$modal','AlertService','$location','UserService', '$routeParams', 'gameFactory', 'cardgameFactory', function($scope,$http,$modal,AlertService,$location,UserService,$routeParams,gameFactory,cardgameFactory){
	$scope.UserService = UserService;
	$scope.$watchCollection('UserService',function(){
		$scope.currentUser = UserService.currentUser
		})
	$scope.count = 0
	$scope.saveScore = function(){
		$scope.count = $scope.count + 1
		console.log("intial count", $scope.count)
		if($scope.count == 5){
			$scope.count = 0
			console.log("after reset", $scope.count)
			var scoreData = {
				score:$scope.score,
				player:$scope.currentUser.id
			}
			// console.log(scoreData)
			// console.log($scope.currentUser)
			$http.post('/api/score', scoreData)
			.success(function(data){
				AlertService.add('success','Your score has been saved');
			}).error(function(err){    
				AlertService.add('danger', "There was an error with the score - please try again");
			})
		}
	}

	$scope.saveScore2 = function(){
		console.log("working!!")
		$scope.count = $scope.count + 1
		console.log("intial count", $scope.count)
		if($scope.count == 5){
			$scope.count = 0
			console.log("after reset", $scope.count)
			var scoreData = {
				score:$scope.score,
				player:$scope.currentUser.id
			}
			// console.log(scoreData)
			// console.log($scope.currentUser)
			$http.post('/api/score_game2', scoreData)
			.success(function(data){
				AlertService.add('success','Your score has been saved');
			}).error(function(err){    
				AlertService.add('danger', "There was an error with the score - please try again");
			})
		}
	}
	
}])

