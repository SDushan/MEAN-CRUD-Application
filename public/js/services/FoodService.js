angular.module('FoodService', []).factory('Food', ['$http', function($http) {

	return {
		getFoods: function() {
			return $http.get('/api');
		},
		createFood: function(food) {
			return $http.post('/api', food);
		},
		deleteFood: function(id) {
			return $http.delete('/api'+ id);
		}
	};
	

}]);
