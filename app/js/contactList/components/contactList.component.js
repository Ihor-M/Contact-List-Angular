'use strict';

var angular = require('angular');

module.exports = angular
    .module('app.contactList.component', [])
    .component('mainContactListComponent', {
        templateUrl: '/app/js/contactList/components/contactList.template.html',
        controller: MainContactListController
    });

function MainContactListController(ContactListFactory, Notification) {
    var ctrl = this;

    ContactListFactory.GetContactsList().get().$promise.then(function (response) {
        ctrl.contactList = response.allContacts;
    });

    ctrl.deleteContact = function(id)
    {
        ContactListFactory.DestroyContact(id).destroy().$promise.then(function (response) {
            if (response.allContacts) {
                Notification.success({
                    message: "<p class='bg-success' style='padding: 20px'>Contact was successfully deleted.<a href='#' " +
                    "class='close' data-dismiss='alert' aria-label='close'>&times;</a></p>",
                    delay: 500,
                    positionX: 'right',
                    positionY: 'bottom'
                });
                ctrl.contactList = response.allContacts;
            } else {
                Notification.warning({
                    message: "<p class='bg-danger' style='padding: 20px'>Can't delete.<a href='#' " +
                    "class='close' data-dismiss='alert' aria-label='close'>&times;</a></p>",
                    delay: 500,
                    positionX: 'right',
                    positionY: 'bottom'
                });
            }
        })
    };

}
