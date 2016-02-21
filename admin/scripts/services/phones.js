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

    this.findByName = function (name) {
      return $http({
        method: 'GET',
        url: '../api/phones.php',
        params : {
          type: 'findByName',
          name: name
        }
      });
    };
    
    this.findAllPhones = function () {
      return $http({
        method: 'GET',
        url: '../api/phones.php',
        params : {
          type: 'findAllPhones'
        }
      });
    };
    
    this.deleteById = function (id) {
      return $http({
        method: 'POST',
        url: '../api/phones.php',
        data : {
          type: 'deleteById',
          id: id
        }
      });
    };
    
    this.activateById = function (id) {
      return $http({
        method: 'POST',
        url: '../api/phones.php',
        data : {
          type: 'activateById',
          id: id
        }
      });
    };
    
    this.savePhone = function (phone) {
      return $http({
        method: 'POST',
        url: '../api/phones.php',
        data : {
          type: 'savePhone',
          phone: phone
        }
      });
    };

  });
