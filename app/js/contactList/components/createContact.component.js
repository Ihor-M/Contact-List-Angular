'use strict';

var angular = require('angular');

module.exports = angular
    .module('app.createContact.component', [])
    .component('createContactComponent', {
        templateUrl: '/app/js/contactList/components/createContact.template.html',
        controller: CreateContactController
    });

function CreateContactController(ContactListFactory) {
    var ctrl = this;

    ctrl.create = function (contact) {
        ContactListFactory.CreateContact().post(contact).$promise.then(function (response) {
            if (response.status == 200) {
                ctrl.success = true;
                alert("Contact was created successfully.");
            } else if (response.code == 422) {
                ctrl.error = response.errors;
            }
        })
    }
}
