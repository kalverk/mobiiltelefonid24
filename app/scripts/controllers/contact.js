'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('ContactCtrl', function ($scope, EmailService) {
    $scope.page = {
      title: 'Kontakt',
      description: 'Mobiiltelefonid24 tegeleb mobiiltelefonide ja tarvikute müügiga.'
    };

    $scope.firm = {
      email: {
        label: 'Email:',
        value: 'mobiiltelefonid24@gmail.com'
      },
      phone: {
        label: 'Telefoni number:',
        value: '+37255540930'
      }
    };

    $scope.form = {
      title: 'Kontaktivorm',
      name: {
        label: 'Nimi:',
        value: 'Nimi'
      },
      email: {
        label: 'E-mail:',
        value: 'E-mail'
      },
      query: {
        label: 'Küsimus',
        value: 'Küsimus'
      },
      send: 'Saada',
      close: 'Sulge'
    };

    $scope.mail = {
      name: '',
      email: '',
      query: ''
    };

    $scope.alert = {
      type: '',
      milliseconds: 100000,
      msg: '',
      show: false
    };

    $scope.closeAlert = function (index) {
      $scope.alert.show = false;
    };

    $scope.submit = function(mail){
      $scope.alert.type = 'success';
      $scope.alert.msg = 'Kiri saadetud!';
      $scope.alert.show = true;

      EmailService.sendEmail(mail).then(function(message) {
        $scope.alert.type = 'success';
        $scope.message = message;
        $scope.alert.show = true;
        resetMail();
      }, function (message) {
        $scope.alert.type = 'danger';
        $scope.message = message;
        $scope.alert.show = true;
      });
    };

    function resetMail () {
      $scope.mail.name = '';
      $scope.mail.email = '';
      $scope.mail.query = '';
    };

  });
