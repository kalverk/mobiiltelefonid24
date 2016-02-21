'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:AlertCtrl
 * @description
 * # AlertCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('AlertCtrl', function ($scope, AlertService) {

    $scope.alerts = AlertService.alerts;

    $scope.closeAlert = function(index) {
      AlertService.alerts.splice(index, 1);
    };

  });
