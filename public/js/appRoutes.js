angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html'
		})

		// products list
		.when('/foods', {
			templateUrl: 'views/foods.html',
			controller: 'FoodController'
		})

		// create food
		.when('/create', {
			templateUrl: 'views/create.html',
			controller: 'FoodController'
		});

	$locationProvider.html5Mode(true);

}]); 
