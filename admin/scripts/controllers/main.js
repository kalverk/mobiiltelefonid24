'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('MainCtrl', function ($scope) {

    $scope.panels = [
      {
        title: 'Lisa uus telefon',
        isCollapsed: true,
        template: 'views/phoneEdit.html'
      },
      {
        title: 'Muuda olemasolevad',
        isCollapsed: true,
        template: 'views/phones.html'
      }
    ];

  });
