'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('MainCtrl', function ($scope, $location, PhonesService, AlertService) {

    PhonesService.findTop10().then(function(message) {
      $scope.phoneList = message.data;
    }, function (message) {
      AlertService.addAlert('danger', 'Ei suutnud telefonide listi laadida', 5000);
    });

    $scope.getFirstPicture = function (pictures) {
      pictures = pictures.split(';');
      return 'uploads/small/' + pictures[0];
    };

    $scope.details = function (phone) {
      $location.path('/info/' + phone.id);
    };

  });
