'use strict';

/**
 * @ngdoc overview
 * @name mobiiltelefonid24App
 * @description
 * # mobiiltelefonid24App
 *
 * Main module of the application.
 */
angular
  .module('mobiiltelefonid24App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
