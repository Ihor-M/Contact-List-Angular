'use strict';

var angular = require('angular');

module.exports = angular
    .module('app.createContact.component', [])
    .component('createContactComponent', {
        templateUrl: '/app/js/contactList/components/createContact.template.html',
        controller: CreateContactController
    });

function CreateContactController(ContactListFactory, Notification) {
    var ctrl = this;

    ctrl.create = function (contact) {
        ContactListFactory.CreateContact().post(contact).$promise.then(function (response) {
            console.log(response);
            if (response.status == 200) {
                Notification.success({
                    message: "<p class='bg-success' style='padding: 20px'>Contact was successfully created<a href='#' " +
                    "class='close' data-dismiss='alert' aria-label='close'>&times;</a></p>",
                    delay: 500,
                    positionX: 'right',
                    positionY: 'bottom'
                });
            } else {
                Notification.warning({
                    message: "<p class='bg-danger' style='padding: 20px'>Can't create.<a href='#' " +
                    "class='close' data-dismiss='alert' aria-label='close'>&times;</a></p>",
                    delay: 500,
                    positionX: 'right',
                    positionY: 'bottom'
                });
            }
        })
    }
}