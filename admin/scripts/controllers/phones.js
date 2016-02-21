'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.controller:PhonesCtrl
 * @description
 * # PhonesCtrl
 * Controller of the mobiiltelefonid24App
 */
angular.module('mobiiltelefonid24App')
  .controller('PhonesCtrl', function ($scope, $uibModal, $location, PhonesService, AlertService, PhonesEditService) {
    
    function loadPhones() {
      PhonesService.findAllPhones().then(function(message) {
        $scope.phoneList = message.data;
      }, function (message) {
        AlertService.addAlert('danger', 'Ei suutnud telefonide listi laadida', 5000);
      });
    }
    
    $scope.getFirstPicture = function(pictures) {
      pictures = pictures.split(';');
      return '../app/uploads/small/' + pictures[0];
    };
    
    $scope.activate = function(phone) {
      PhonesService.activateById(phone.id).then(function(message) {
        AlertService.addAlert('success', 'Telefon aktiveeritud', 5000);
        loadPhones();
      }, function (message) {
        AlertService.addAlert('danger', 'Ei suutnud telefoni aktiveerida', 5000);
      });
    };
    
    $scope.remove = function(phone) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/modal.html',
        controller: 'ModalCtrl',
        resolve: {
          params: {
            phone: phone,
            template: 'views/delete.html',
            title: 'Kas deaktiveerin ' + phone.name + '?',
            ok: 'Deaktiveeri'
          }
        }
      });

      modalInstance.result.then(function (data) {
        PhonesService.deleteById(data.phone.id).then(function(message) {
          AlertService.addAlert('success', 'Telefon deaktiveeritud', 5000);
          loadPhones();
        }, function (message) {
          AlertService.addAlert('danger', 'Ei suutnud telefoni deaktiveerida', 5000);
        });
      }, function () {
        //console.log('Modal dismissed');
      });
      
    };
    
    $scope.edit = function(phone) {
      PhonesEditService.prefillPhone(phone);
      $('body').animate({scrollTop: $('#' + $scope.$parent.panels[0].id).offset().top}, 'slow');
      $scope.$parent.panels[0].title = 'Muuda telefoni andmeid';
      $scope.$parent.panels[0].isCollapsed = false;
    };
    
    loadPhones();

  });
