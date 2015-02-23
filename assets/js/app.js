var oceanGame = angular.module('OceanGame', ['ui.bootstrap', 'ngRoute', 'angular.directives-round-progress']);

oceanGame.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
// no more #!
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/',{
		templateUrl: '/views/home.html',
		controller: 'HomeCtrl'	
	})
	.when('/game',{
		templateUrl: '/views/game.html',
		controller: 'GameCtrl'
	})
	.when('/about',{
		templateUrl:'/views/about.html',
		controller: 'StaticCtrl'
	})
	.when('/profile',{
		templateUrl: '/views/profile.html',
		controller: 'ProfileCtrl'
	})
	.when('/play',{
		templateUrl: '/views/play.html',
		controller: 'GameCtrl'
	})
	.when('/cardgame',{
		templateUrl: '/views/cardgame.html',
		controller: 'GameCtrl'
	})
}]);

oceanGame.run(['UserService', function(UserService){
	UserService.check(function(err,data){
		console.log('check',err,data);
	});
}]);
