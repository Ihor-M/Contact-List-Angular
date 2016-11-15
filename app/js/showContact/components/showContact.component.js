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
        })

    }



}
