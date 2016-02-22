'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.service:PhonesService
 * @description
 * # PhonesService
 * Controller of the mobiiltelefonid24App
 */

angular.module('mobiiltelefonid24App')
  .service('PhonesService', function ($http) {

    this.findAllUsedPhones = function () {
      return $http({
        method: 'GET',
        url: '../api/phones.php',
        params : {
          type: 'findAllUsedPhones'
        }
      });
    };

    this.findAllNewPhones = function () {
      return $http({
        method: 'GET',
        url: '../api/phones.php',
        params : {
          type: 'findAllNewPhones'
        }
      });
    };

    this.findTop10 = function () {
      return $http({
        method: 'GET',
        url: '../api/phones.php',
        params : {
          type: 'findTop10'
        }
      });
    };

    this.findById = function (id) {
      return $http({
        method: 'GET',
        url: '../api/phones.php',
        params : {
          type: 'findById',
          id: id
        }
      });
    };

  });
