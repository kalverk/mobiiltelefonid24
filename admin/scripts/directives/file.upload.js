'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.service:PhonesEditService
 * @description
 * # PhonesEditService
 * Controller of the mobiiltelefonid24App
 */

angular.module('mobiiltelefonid24App')
  .directive('fileUpload', function(PhonesEditService) {
    return function($scope, elm, attrs) {
      window.scope = $scope;
      elm.bind('change', function( evt ) {
        var file, x, xlen, reader, img;
        for(x = 0, xlen = evt.target.files.length; x < xlen; x++) {
          file = evt.target.files[x];
          if(file.type.indexOf('image') !== -1) {
      
            reader = new FileReader();
            
            var scope = {
              scope: this,
              file: file
            };
      
            reader.onload = function(e) {
              PhonesEditService.setPhonePicture({
                name: this.file.name,
                src: e.target.result
              });
              this.scope.$apply();
            }.bind(scope);
            
            reader.readAsDataURL(file);
          }
        }
      }.bind($scope));
    };
});