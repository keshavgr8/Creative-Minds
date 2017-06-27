'use strict';

// Initialize the Firebase SDK
//var config = {
//    apiKey: "AIzaSyBQRdv_XzONG245r7HliyB5MveKc7_g_z0",
//    authDomain: "gateaway-backend.firebaseapp.com",
//    databaseURL: "https://gateaway-backend.firebaseio.com",
//    projectId: "gateaway-backend",
//    storageBucket: "gateaway-backend.appspot.com",
//    messagingSenderId: "964137106288"
//};
//firebase.initializeApp(config);

var gateAway_app = angular.module('gateawayApp', ['ngStorage', 'ngSanitize', 'ui.router', 'ui.materialize', 'firebase']);

gateAway_app.constant('_',
    window._
);

gateAway_app.config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
        })
        .state('about-us', {
            url: '/about-us',
            templateUrl: 'views/about-us.html',
            //        controller: 'AboutCtrl'
        })
        .state('contact-us', {
            url: '/contact-us',
            templateUrl: 'views/contact-us.html',
            controller: 'ContactCtrl'
        })
        .state('bookings', {
            url: '/bookings',
            templateUrl: 'views/bookings.html',
            controller: 'BookingsCtrl'
        })
        .state('packages', {
            url: '/packages/{destinationId}',
            templateUrl: 'views/packages.html',
            controller: 'PackagesCtrl'
        })
        .state('destination', {
            url: '/destination/{destinationId}',
            templateUrl: 'views/destinations.html',
            controller: 'DestinationCtrl'
        })
        .state('book-now', {
            url: '/book-now/{packageId}',
            templateUrl: 'views/book-now.html',
            controller: 'BookNowCtrl'
        })
        .state('thank-you', {
            url: '/thank-you',
            templateUrl: 'views/thank-you.html',
            controller: 'ThankYouCtrl'
        });
});

gateAway_app.config(function () {
    var config = {
        apiKey: "AIzaSyBQRdv_XzONG245r7HliyB5MveKc7_g_z0",
        authDomain: "gateaway-backend.firebaseapp.com",
        databaseURL: "https://gateaway-backend.firebaseio.com",
        projectId: "gateaway-backend",
        storageBucket: "gateaway-backend.appspot.com",
        messagingSenderId: "964137106288"
    };
    firebase.initializeApp(config);
});

gateAway_app.factory('Auth', function ($firebaseAuth) {
    var auth = $firebaseAuth();

    return auth;
});

gateAway_app.controller('InitCtrl', ['$scope', '_', '$http', '$localStorage', '$sessionStorage', 'firebase', function ($scope, _, $http, $localStorage, $sessionStorage, firebase) {
    $scope.package = $http.get('scripts/package.json')
        .then(function (response) {
            return $sessionStorage.package = response.data;
        });
    //    console.log($scope.package);
    //    $sessionStorage.package = $scope.package;
    console.log($sessionStorage.package);
    $scope.destination = $http.get('scripts/destination.json')
        .then(function (response) {
            return $sessionStorage.destination = response.data;
        });
    console.log($sessionStorage.destination);
    $sessionStorage.bookings = [];
}]);
