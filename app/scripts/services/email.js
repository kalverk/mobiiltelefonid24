'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.service:EmailService
 * @description
 * # EmailService
 * Controller of the mobiiltelefonid24App
 */

angular.module('mobiiltelefonid24App')
  .service('EmailService', function ($http) {

    this.sendEmail = function (mail) {
      return $http({
        method: 'POST',
        url: '../api/email.php',
        data : mail
      });
    };

  });
