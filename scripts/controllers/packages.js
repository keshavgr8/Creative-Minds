'use strict';

gateAway_app.controller('PackagesCtrl', ['$scope', '_', '$http', '$localStorage', '$sessionStorage', '$stateParams', function ($scope, _, $http, $localStorage, $sessionStorage, $stateParams) {
    $scope.packages = $sessionStorage.package;
    $scope.destinationId = $stateParams.destinationId;
    $scope.maxDestinationId = _.max($scope.packages,function(singlePackage){return singlePackage.destinationId});
    $scope.getPackage = function(){
        if($scope.destinationId != 'all' && $scope.destinationId != '' && $scope.destinationId <= $scope.maxDestinationId.destinationId){
            return _.where($scope.packages, {destinationId : $scope.destinationId});
        }else{
            return $scope.packages;
        }
    };
    $scope.currentPackage = $scope.getPackage();
    console.log($scope.destinationId);
    console.log($scope.currentPackage);
}]);
