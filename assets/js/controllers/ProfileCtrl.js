oceanGame.controller('ProfileCtrl', ['$scope','$http','$modal','AlertService','$location','UserService', '$routeParams', 'gameFactory', function($scope,$http,$modal,AlertService,$location,UserService,$routeParams,gameFactory){
  
	$scope.UserService = UserService;
	$scope.$watchCollection('UserService',function(){
		$scope.currentUser = UserService.currentUser
		if ($scope.currentUser == false){
			AlertService.add('danger', 'Please log in to view your profile')
			$location.path( "/" )
		}
	})

	var self=this;

	var averagePerc= 0;

	$http.get('/api/user/'+UserService.currentUser.id+'/scores')
	.success(function(data){
		var sum = 0;
		for( var i = 0; i<data.length; i++ ){
   		 	sum += data[i].score;
		}

		averagePerc = data.length > 0 ? (sum / (data.length*5)) : 0;
		var average = Math.round(averagePerc * 100)

		$scope.roundProgressData = {
        	label: average + '%',
        	percentage: averagePerc
    	}
	})

	var self=this;
	
	$http.get('/api/user/'+UserService.currentUser.id+'/scores2')
	.success(function(data){
		var sum = 0;
		for( var i = 0; i<data.length; i++ ){
   		 	sum += data[i].score;
		}

		var averagePerc = data.length > 0 ? (sum / (data.length*5)) : 0;
		var average = Math.round(averagePerc * 100)

		$scope.roundProgressData2 = {
        	label: average + '%',
        	percentage: averagePerc
    	}

	})

	if(UserService.currentUser.farm == ""){
		$scope.existingAvatar = false
	}else{
		$scope.existingAvatar = true
	}

	$scope.count = 0

	$scope.showAvatar = false

	$scope.avatar = function() {
		$scope.count = $scope.count + 1
		
		$scope.showAvatar = true

		$http.post('/image/data').success(function(data){
			$scope.urlId = data.photos.photo[$scope.count].id
			$scope.farm = data.photos.photo[$scope.count].farm
			$scope.server = data.photos.photo[$scope.count].server
			$scope.secret = data.photos.photo[$scope.count].secret
		})
		.error(function(err){    
			AlertService.add('danger', "No search results found - please try again");
		})
	}

	$scope.save = function(){

		$scope.existingAvatar = true;

		var avatarData = {
			urlId:$scope.urlId,
			farm:$scope.farm,
			secret:$scope.secret,
			server:$scope.server
		}
		
		$http.put('/api/user/'+$scope.currentUser.id,avatarData)
		.success(function(data){
			$scope.currentUser.urlId = $scope.urlId
			$scope.currentUser.farm = $scope.farm
			$scope.currentUser.secret = $scope.secret
			$scope.currentUser.server = $scope.server
			$scope.showAvatar = false
		})
		.error(function(err){
			alert(err);
		});
	}
}])
