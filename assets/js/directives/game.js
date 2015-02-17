oceanGame.directive('game', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/template.html',
		controller:['$scope', 'gameFactory', function($scope, gameFactory){
			$scope.start = function() {
				$scope.id = 0;
				$scope.gameOver = false;
				$scope.inProgress = true;
				$scope.getQuestion();
				$scope.value= '';
			};
 
			$scope.reset = function() {
				$scope.inProgress = false;
				$scope.score = 0;
			}
 
			$scope.getQuestion = function() {
				var q = gameFactory.getQuestion($scope.id);
				if(q) {
					$scope.question = q.question;
					$scope.options = q.options;
					$scope.answer = q.answer;
					$scope.answerMode = true;
				} else {
					$scope.gameOver = true;
				}
			};

			$scope.newValue = function(value) {
       			$scope.value = value
    		};
 
			$scope.checkAnswer = function() {

				var ans = $scope.value
				// console.log(ans)
				// console.log($scope.options[$scope.answer])

				if(ans == ""){
					return
				}else{
					if(ans == $scope.options[$scope.answer]) {
						$scope.score++;
						$scope.correctAns = true;
					} else {
						$scope.correctAns = false;
					}
	 
					$scope.answerMode = false;
					$scope.value = ""
				}
			};
 
			$scope.nextQuestion = function() {
				$scope.id++;
				$scope.getQuestion();
			}
 
			$scope.reset();
	}]
}
});