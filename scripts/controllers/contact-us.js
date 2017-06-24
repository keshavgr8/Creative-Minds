'use strict';

gateAway_app.controller('ContactCtrl', function ($scope) {
        $scope.contactFormName = $scope.contactName;
        $scope.contactFormEmail = $scope.contactEmail;
        $scope.contactFormMessage = $scope.contactMessage;
        $scope.submitContact = function () {
            console.log($scope.contactFormName + " " + $scope.contactFormEmail + " " + $scope.contactFormMessage);
        };
    });
