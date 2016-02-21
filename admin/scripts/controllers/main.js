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
        id: 'panel_0',
        title: 'Lisa uus telefon',
        isCollapsed: true,
        template: 'views/phoneEdit.html'
      },
      {
        id: 'panel_1',
        title: 'Muuda olemasolevad',
        isCollapsed: true,
        template: 'views/phones.html'
      }
    ];

  });
