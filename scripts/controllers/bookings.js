'use strict';

gateAway_app.controller('BookingsCtrl',['$scope', '_', '$http', '$localStorage', '$sessionStorage', function ($scope, _, $http, $localStorage, $sessionStorage) {
    $scope.bookings = $sessionStorage.bookings;
}]);
