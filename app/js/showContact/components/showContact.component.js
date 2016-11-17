'use strict';

var angular = require('angular');

module.exports = angular
    .module('app.showContact.component', [])
    .component('showContactComponent', {
        templateUrl: '/app/js/showContact/components/showContact.template.html',
        controller: ShowContactController
    });

function ShowContactController(ShowContactFactory) {
    var ctrl = this;

    this.$routerOnActivate = function (next) {
        var id = next.params.id;

        ShowContactFactory.GetContact(id).get().$promise.then(function (response) {
          ctrl.contact = response.contact;
        });

        ctrl.showEditmode = function (bool) {
            ctrl.editmode = bool;
        };

        ctrl.update = function (contact) {
            var id = ctrl.contact.id;
           ShowContactFactory.UpdateContact(id).update(id, contact).$promise.then(function (response) {
               if (response.code == 422) {
                   ctrl.error = response.errors;
               } else {
                   ctrl.success = true;
                   ctrl.contact = response.contact;
                   alert("Contact was updated successfully");
                   ctrl.editmode = false;
               }
           })
        }
    }



}
