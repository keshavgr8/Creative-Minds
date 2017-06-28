'use strict';

gateAway_app.controller('BookingsCtrl', ['$scope', '_', '$http', '$localStorage', '$sessionStorage', '$firebaseAuth', '$firebaseObject', 'Auth', function ($scope, _, $http, $localStorage, $sessionStorage, $firebaseAuth, $firebaseObject, $rootScope, Auth) {
    $scope.bookings = $sessionStorage.bookings;

    var ref = firebase.database().ref();
    // download the data into a local object
    $scope.data = $firebaseObject(ref);
    $scope.authObj = $firebaseAuth();
    $scope.signIn = function () {
        $scope.authObj.$signInWithPopup("google").then(function (result) {
            console.log("Signed in as:", result.user.uid);
        }).catch(function (error) {
            console.error("Authentication failed:", error);
        });
    };
}]);
