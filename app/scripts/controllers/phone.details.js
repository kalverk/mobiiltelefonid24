'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:PhonesCtrl
 * @description
 * # PhonesCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('PhoneDetailsCtrl', function ($scope, $routeParams, $uibModal, PhonesService, EmailService, AlertService) {

    function findById (id) {
      PhonesService.findById(id).then(function(message) {
        $scope.phone = message.data[0];
      }, function (message) {
        AlertService.addAlert('danger', 'Ei suutnud telefoni leida', 5000);
      });
    };

    findById($routeParams.id);

    $scope.isCollapsed = true;

    $scope.makePurchase = function (phone) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/modal.html',
        controller: 'ModalCtrl',
        resolve: {
          params: {
            phone: phone,
            template: 'views/buy.html',
            isEmailForm: true,
            validEmail: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            title: 'Saadan ostupäringu telefonile ' + phone.name,
            ok: 'Saada päring'
          }
        }
      });

      modalInstance.result.then(function (data) {
        EmailService.sendEmail({name: data.name, email: data.email, query: data.query}).then(function(message) {
          AlertService.addAlert('success', 'Päring saadetud', 5000);
        }, function (message) {
          AlertService.addAlert('danger', 'Ei suutnud päringut saata');
        });
      }, function () {
        //console.log('Modal dismissed');
      });
    };

    $scope.pictureList = function (pictures) {
      if (!pictures) {
        return [];
      }
      var i, len, picArr = [];
      pictures = pictures.split(';');
      for (i = 0, len = pictures.length; i < len; i += 1) {
        picArr.push('uploads/' + pictures[i]);
      }
      return picArr;
    };

  });
