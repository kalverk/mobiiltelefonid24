'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:PhonesCtrl
 * @description
 * # PhonesCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('PhonesCtrl', function ($scope, $location, PhonesService) {

    $scope.usedPhones = $location.url() === '/kasutatud_telefonid' ? true: false;

    $scope.phoneList = PhonesService.findAllUsedPhones().then(function(message) {
      console.log(message, 'success');
    }, function (message) {
      console.log(message, 'failed');
    });

    $scope.phoneList = PhonesService.findAllNewPhones().then(function(message) {
      console.log(message, 'success');
    }, function (message) {
      console.log(message, 'failed');
    });

  });
