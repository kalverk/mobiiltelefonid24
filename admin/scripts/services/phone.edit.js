'use strict';

/**
 * @ngdoc function
 * @name mobiiltelefonid24App.service:PhonesEditService
 * @description
 * # PhonesEditService
 * Controller of the mobiiltelefonid24App
 */

angular.module('mobiiltelefonid24App')
  .service('PhonesEditService', function (AlertService, PhonesService) {
  
    this.phone = {};
            
    this.prefill = function (model) {
      PhonesService.findByName(model).then(function(message) {
        this.prefillPhone(message.data, true);
      }.bind(this), function (message) {
        AlertService.addAlert('danger', 'Ei suutnud välju eeltäita', 5000);
      });
    };
    
    this.prefillPhone = function (data, isNew) {
      if (!isNew) {
        this.phone.id = data.id;
      }
      this.phone.cameraB = data.cameraB;
      this.phone.cameraF = data.cameraF;
      this.phone.cardSlot = data.cardSlot;
      this.phone.cpu = data.cpu;
      this.phone.description = data.description;
      this.phone.gprs = data.gprs;
      this.phone.gps = data.gps;
      this.phone.internal = data.internal;
      this.phone.name = data.name;
      this.phone.price = data.price;
      this.phone.nfc = data.nfc;
      this.phone.os = data.os;
      this.phone.sim = data.sim;
      this.phone.size = data.size;
      this.phone.used = data.used === 1 ? true : false;
      this.phone.video = data.video;
      this.phone.weight = data.weight;
      this.phone.wlan = data.wlan;
      this.phone.views = data.views;
      this.phone.visible = data.visible;
      this.getPictureArray(data.pictures);
    };
    
    this.setPhonePicture = function (picture) {
      if (!this.phone.pictures) {
        this.phone.pictures = [];
      }
      this.phone.pictures.push(picture);
    };
    
    this.getPictureArray = function (pictures) {
      if (!this.phone.pictures) {
        this.phone.pictures = [];
      }
      if (!pictures) {
        this.phone.pictures = [];
        return;
      }
      var i, len, image;
      pictures = pictures.split(';');
      for (i = 0, len = pictures.length; i < len; i += 1) {
        image = {
          name: pictures[i],
          src: '../app/uploads/small/' + pictures[i]
        };
        this.phone.pictures.push(image);
      }
    };
    
    this.removePicture = function (idx) {
      this.phone.pictures.splice(idx,1);
    };
    
    this.resetForm = function (idx) {
      this.prefillPhone({});
    };
    
  });