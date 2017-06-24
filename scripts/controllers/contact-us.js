'use strict';

angular.module('gateawayApp')
    .controller('ContactCtrl', function ($scope) {
        $scope.contactFormName = $scope.contactName;
        $scope.contactFormEmail = $scope.contactEmail;
        $scope.contactFormMessage = $scope.contactMessage;
        $scope.submitContact = function () {
            console.log($scope.contactFormName + " " + $scope.contactFormEmail + " " + $scope.contactFormMessage);
        };
    });
