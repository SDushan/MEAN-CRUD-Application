angular.module('FoodCtrl', ['ui.bootstrap']).controller('FoodController', ['$scope', '$location', '$route', 'Food', function($scope, $location, $route, Food) {
   
    $scope.currentPage = 1;
    $scope.pageSize = 5;
    $scope.foods = [];

    $scope.getAll = function() {
        Food.getFoods().then(function(res) {
            $scope.foods = res.data;
        }).catch(function(err) {
            console.log(err);
        });
    };

    $scope.saveData = function(food) {
        $scope.IsSubmit = true;
        Food.createFood(food).then(function(res) {
            $route.reload();
        }).catch(function(err) {
            console.log(err);
        });
    };

    $scope.deleteFood = function(id) {
        if (confirm('Are you sure to delete?')) {
        Food.deleteFood(id).then(function(res) {
            $route.reload();
        }).catch(function(err) {
            console.log(err);
        });
        };
    };

}])

.filter('pagination', function(){
    return function(res, start){
        return res.slice(start);
    };
});