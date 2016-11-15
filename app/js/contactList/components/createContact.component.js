'use strict';

var angular = require('angular');

module.exports = angular
    .module('app.createContact.component', [])
    .component('createContactComponent', {
        templateUrl: '/app/js/contactList/components/createContact.template.html',
        controller: CreateContactController
    });

function CreateContactController() {
    var ctrl = this;
}