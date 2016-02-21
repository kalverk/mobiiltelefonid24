'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('ModalCtrl', function ($scope, $uibModalInstance, params) {
    
    $scope.params = params;
    
    //Defaults
    $scope.buttonOk = 'Ok';
    $scope.buttonCancel = 'Katkesta';
  
    $scope.ok = function () {
      $uibModalInstance.close($scope.params);
    };
  
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  });
