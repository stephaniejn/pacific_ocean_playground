oceanGame.controller('GameCtrl', ['$scope','$http','$modal','AlertService','$location','UserService', '$routeParams', 'gameFactory', 'cardgameFactory', function($scope,$http,$modal,AlertService,$location,UserService,$routeParams,gameFactory,cardgameFactory){
	$scope.UserService = UserService;
	$scope.$watchCollection('UserService',function(){
		$scope.currentUser = UserService.currentUser
		})
	$scope.count = 0
	$scope.saveScore = function(){
		$scope.count = $scope.count + 1
		if($scope.count == 5){
			$scope.count = 0

			var scoreData = {
				score:$scope.score,
				player:$scope.currentUser.id
			}
			$http.post('/api/score', scoreData)
			.success(function(data){
				$http.get('/api/user/'+UserService.currentUser.id+'/scores')
				.success(function(data){
					var sum = 0;
					for( var i = 0; i<data.length; i++ ){
			   		 	sum += data[i].score;
					}

					averagePerc = data.length > 0 ? (sum / (data.length*5)) : 0;
					var average = Math.round(averagePerc * 100)

					var totalScores = {
						total:average
					}

					$http.put('/api/user/'+UserService.currentUser.id,totalScores).success(function(data){
						$scope.totalScores = totalScores
					})

				})
			}).error(function(err){    
				// AlertService.add('danger', "There was an error with the score - please try again");
			})

		}
	}

	$scope.saveScore2 = function(){
		$scope.count = $scope.count + 1
		if($scope.count == 5){
			$scope.count = 0

			var scoreData = {
				score:$scope.score,
				player:$scope.currentUser.id
			}

			$http.post('/api/score_game2', scoreData)
			.success(function(data){
				$http.get('/api/user/'+UserService.currentUser.id+'/scores2')
				.success(function(data){
					var sum = 0;
					for( var i = 0; i<data.length; i++ ){
			   		 	sum += data[i].score;
					}

					averagePerc = data.length > 0 ? (sum / (data.length*5)) : 0;
					var average = Math.round(averagePerc * 100)

					var totalScores = {
						total2:average
					}

					$http.put('/api/user/'+UserService.currentUser.id,totalScores).success(function(data){
						$scope.totalScores = totalScores
					})

				})
			}).error(function(err){    
				// AlertService.add('danger', "There was an error with the score - please try again");
			})
		}
	}
	
}])

