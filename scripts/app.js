'use strict';


var gateAway_app = angular.module('gateawayApp', ['ngStorage', 'ngSanitize', 'ui.router', 'ui.materialize']);

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
        .state('packages',{
            url: '/packages',
            templateUrl: 'views/packages.html',
            controller: 'PackagesCtrl'
        });
});

gateAway_app.controller('InitCtrl', ['$scope', '_', '$http', '$localStorage', '$sessionStorage', function ($scope, _, $http, $localStorage, $sessionStorage) {
    $scope.package = $http.get('scripts/package.json')
        .then(function (response) {
            return $sessionStorage.package=response.data;
        });
//    console.log($scope.package);
//    $sessionStorage.package = $scope.package;
    console.log($sessionStorage.package);
    $scope.destination = $http.get('scripts/destination.json')
        .then(function (response) {
            return $sessionStorage.destination=response.data;
        });
    
    $sessionStorage.bookings = [];
}]);
