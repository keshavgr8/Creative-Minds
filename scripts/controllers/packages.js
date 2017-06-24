'use strict';

gateAway_app.controller('PackagesCtrl',['$scope', '_', '$http', '$localStorage', '$sessionStorage', function ($scope, _, $http, $localStorage, $sessionStorage) {
    $scope.packages = $sessionStorage.package;
}]);
