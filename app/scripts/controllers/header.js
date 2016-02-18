'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('HeaderCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  });
