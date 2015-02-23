oceanGame.controller('GameCtrl', ['$scope','$http','$modal','AlertService','$location','UserService', '$routeParams', 'gameFactory', 'cardgameFactory', function($scope,$http,$modal,AlertService,$location,UserService,$routeParams,gameFactory,cardgameFactory){
	$scope.UserService = UserService;
	$scope.$watchCollection('UserService',function(){
		$scope.currentUser = UserService.currentUser
		})

	$scope.saveScore = function(){
		var scoreData = {
			score:$scope.score,
			player:$scope.currentUser.id
		}
		console.log(scoreData)
		console.log($scope.currentUser)
		$http.post('/api/score', scoreData)
		.success(function(data){
			AlertService.add('success','Your score has been saved');
		}).error(function(err){    
			AlertService.add('danger', "There was an error with the score - please try again");
		})
	}

	$scope.saveScore_Game2 = function(){
		var scoreData = {
			score:$scope.score,
			player:$scope.currentUser.id
		}
		console.log(scoreData)
		console.log($scope.currentUser)
		$http.post('/api/score_game2', scoreData)
		.success(function(data){
			AlertService.add('success','Your score has been saved');
		}).error(function(err){    
			AlertService.add('danger', "There was an error with the score - please try again");
		})
	}
}])