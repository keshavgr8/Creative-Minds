'use strict';

gateAway_app.controller('DestinationCtrl', ['$scope', '_', '$http', '$localStorage', '$sessionStorage', '$stateParams', function ($scope, _, $http, $localStorage, $sessionStorage, $stateParams) {
    
    $scope.destinations = $sessionStorage.destination;
    $scope.maxDestinationId = _.max($scope.destinations,function(destination){return destination.ID});
    $scope.destinationId = $stateParams.destinationId;
    $scope.getDestination = function(){
        if($scope.destinationId != 'all' && $scope.destinationId != '' && $scope.destinationId <= $scope.maxDestinationId.ID){
            return _.where($scope.destinations, {ID : $scope.destinationId});
        }else{
            return $scope.destinations;
        }
    };
    $scope.currentDestination = $scope.getDestination();
    console.log($scope.destinationId);
    console.log($scope.currentDestination);
    
}]);
