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

    $location.url() === '/kasutatud_telefonid' ? findAllUsedPhones(): findAllNewPhones();

    $scope.list = true;

    function findAllUsedPhones () {
      PhonesService.findAllUsedPhones().then(function(message) {
        $scope.phoneList = message.data;
      }, function (message) {
        AlertService.addAlert('danger', 'Ei suutnud telefonide listi laadida', 5000);
      });
    };

    function findAllNewPhones () {
      PhonesService.findAllNewPhones().then(function(message) {
        $scope.phoneList = message.data;
      }, function (message) {
        AlertService.addAlert('danger', 'Ei suutnud telefonide listi laadida', 5000);
      });
    };

    $scope.getFirstPicture = function (pictures) {
      pictures = pictures.split(';');
      return 'uploads/small/' + pictures[0];
    };

    $scope.details = function (phone) {
      $location.path('/info/' + phone.id);
    };

  });
