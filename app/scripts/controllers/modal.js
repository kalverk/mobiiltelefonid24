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
    $scope.formValid = true;

    $scope.ok = function () {
      if ($scope.params.isEmailForm) {
        emailFormValidation();
      }
      if (!$scope.formValid) {
        return;
      }
      $uibModalInstance.close($scope.params);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    function emailFormValidation () {
      if (!$scope.params.name || $scope.params.name.length < 1) {
        $scope.params.wrongName = true;
        $scope.formValid = false;
      }else {
        $scope.params.wrongName = false;
        $scope.formValid = true;
      }
      if (!$scope.params.email || !$scope.params.validEmail.test($scope.params.email)) {
        $scope.params.wrongEmail = true;
        $scope.formValid = false;
      }else {
        $scope.params.wrongEmail = false;
        $scope.formValid = true;
      }
      if (!$scope.params.query || $scope.params.query.length < 1) {
        $scope.params.wrongQuery = true;
        $scope.formValid = false;
      }else {
        $scope.params.wrongQuery = false;
        $scope.formValid = true;
      }
    }

  });
