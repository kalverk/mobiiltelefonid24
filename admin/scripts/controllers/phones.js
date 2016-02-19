'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:PhonesCtrl
 * @description
 * # PhonesCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('PhonesCtrl', function ($scope) {

    //TODO siin võiks kõik kustutatud ja olemasolevad koos olla!

    $scope.phoneList = [];

    $scope.$watch('panel.isCollapsed', function(value){
      //TODO if there is no data requrest for it
      if (value && $scope.phoneList.length < 1) {
        console.log('request for data');
      }
    });


  });
