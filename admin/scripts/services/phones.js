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
                url: 'api/phones.php',
                data : {
                  type: 'findByName',
                  name: name
                }
              });
    };


  });
