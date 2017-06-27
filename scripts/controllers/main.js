'use strict';

gateAway_app.controller('MainCtrl', ['$scope', '_', '$http', '$localStorage', '$sessionStorage', function ($scope, _, $http, $localStorage, $sessionStorage) {
    //    $scope.featuredPackage = _.max($sessionStorage.package,function(pack){return pack.cost;});
    //    console.log($scope.featuredPackage);
    $scope.packages = $sessionStorage.package;
    //    $scope.stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    $scope.featuredPackage = _.sample($scope.packages, 1);
    console.log($scope.featuredPackage);
    
    $scope.topDestinations = $sessionStorage.destination;
}]);
