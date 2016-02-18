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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/uued_telefonid', {
        templateUrl: 'views/phones.html',
        controller: 'PhonesCtrl',
        controllerAs: 'phones'
      })
      .when('/kasutatud_telefonid', {
        templateUrl: 'views/phones.html',
        controller: 'PhonesCtrl',
        controllerAs: 'phones'
      })
      .when('/tarvikud', {
        templateUrl: 'views/accessories.html',
        controller: 'AccessoriesCtrl',
        controllerAs: 'accessories'
      })
      .when('/kontakt', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
