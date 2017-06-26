'use strict';

gateAway_app.controller('BookingsCtrl', ['$scope', '_', '$http', '$localStorage', '$sessionStorage', '$firebaseAuth', '$firebaseObject', 'Auth', function ($scope, _, $http, $localStorage, $sessionStorage, $firebaseAuth, $firebaseObject, $rootScope, Auth) {
    $scope.bookings = $sessionStorage.bookings;

    //    $scope.signIn = function () {
    //        Auth.$signInWithEmailAndPassword($scope.email, $scope.password).then(function (auth) {
    //            console.log(auth + " logged in");
    //        }, function (error) {
    //            if (error = 'INVALID_EMAIL') {
    //                console.log('email invalid or not signed up — trying to sign you up!');
    //                $scope.signUp();
    //            } else if (error = 'INVALID_PASSWORD') {
    //                console.log('wrong password!');
    //            } else {
    //                console.log(error);
    //            }
    //        });
    //    }
    //
    //    $scope.signUp = function () {
    //        Auth.$createUserWithEmailAndPassword($scope.email, $scope.password).then(function (user) {
    //            console.log(user+" created");
    //        }, function (error) {
    //            console.log(error);
    //        });
    //    };

    var ref = firebase.database().ref();
    // download the data into a local object
    $scope.data = $firebaseObject(ref);
    $scope.authObj = $firebaseAuth();

    $scope.signIn = $scope.authObj.$signInWithEmailAndPassword({
        email: $scope.email,
        password: $scope.password
    }).then(function (authData) {
        console.log("Logged in as:", authData.uid);
    }).catch(function (error) {
        console.error("Authentication failed:", error);
    });
}]);
