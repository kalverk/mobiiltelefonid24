'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:EditPhoneCtrl
 * @description
 * # EditPhoneCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('EditPhoneCtrl', function ($scope, AlertService, PhonesEditService, PhonesService) {

    $scope.phone = PhonesEditService.phone;

    $scope.prefill = function (model) {
      PhonesEditService.prefill(model);
    };

    $scope.removePicture = function (idx) {
      PhonesEditService.removePicture(idx);
    };

    $scope.save = function () {
      $scope.$parent.panels[0].title = 'Lisa uus telefon';
      PhonesService.savePhone($scope.phone).then(function(message) {
        AlertService.addAlert('success', 'Salvestamine õnnestus', 5000);
        $scope.$parent.panels[0].isCollapsed = true;
        PhonesEditService.resetForm();
        $('body').animate({scrollTop: $('#' + $scope.$parent.panels[0].id).offset().top}, 'slow');
        //TODO choose files jääb ikka 2tk näitama kui salvestama vajutada
      }, function (message) {
        AlertService.addAlert('danger', 'Salvestamine ebaõnnestus', 5000);
      });
    };

    $scope.clear = function () {
      PhonesEditService.resetForm();
    };

  });
