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
            //        views: {
            //            service: {
            //                templateUrl: '',
            //                controller: ''
            //            },
            //            package: {
            //                templateUrl: '',
            //                controller: ''
            //            },
            //            topDestination: {
            //                templateUrl: '',
            //                controller: ''
            //            },
            //            advertisement: {
            //                templateUrl: '',
            //                controller: ''
            //            }
            //        }
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
});
