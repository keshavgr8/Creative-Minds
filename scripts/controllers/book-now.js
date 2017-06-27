'use strict';

gateAway_app.controller('BookNowCtrl', ['$scope', '_', '$http', '$localStorage', '$sessionStorage', '$stateParams', function ($scope, _, $http, $localStorage, $sessionStorage, $stateParams) {
    $scope.packageId = $stateParams.packageId;
    console.log($scope.packageId);
    $scope.packages = $sessionStorage.package;
    $scope.getPackage = function () {
        return _.where($scope.packages, {
            ID: $scope.packageId
        });
    };
    $scope.currentPackage = $scope.getPackage();
    console.log($scope.currentPackage);
}]);
