'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:EditPhoneCtrl
 * @description
 * # EditPhoneCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('EditPhoneCtrl', function ($scope, PhonesService) {

    $scope.phone = {};

    $scope.prefill = function (model) {
      PhonesService.findByName(model).then(function(message) {
        console.log(message, 'success');
      }, function (message) {
        console.log(message, 'failed');
      });
      console.log('query data from db and prefill fields', model);
    };

    /*$scope.$watch('panel.isCollapsed', function(value){
      //TODO
      console.log('iscollapsed',value);
    });*/


  });
