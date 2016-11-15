'use strict';

var angular = require('angular');

module.exports = angular
    .module('app.showContact.component', [])
    .component('showContactComponent', {
        templateUrl: '/app/js/contactList/components/showContact.template.html',
        controller: ShowContactController
    });

function ShowContactController() {
    var ctrl = this;
}
