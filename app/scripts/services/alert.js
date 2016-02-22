'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.service:AlertService
 * @description
 * # AlertService
 * Controller of the mobiiltelefonid24App
 */

angular.module('mobiiltelefonid24App')
  .service('AlertService', function () {

    this.alerts = [];

    this.addAlert = function(type, msg, ms) {
      this.alerts.push({type: type, msg: msg, ms: ms});
    };

  });
