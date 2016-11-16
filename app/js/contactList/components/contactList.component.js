'use strict';

var angular = require('angular');

module.exports = angular
    .module('app.contactList.component', [])
    .component('mainContactListComponent', {
        templateUrl: '/app/js/contactList/components/contactList.template.html',
        controller: MainContactListController
    });

function MainContactListController(ContactListFactory) {
    var ctrl = this;
    //
    // this.$routerOnActivate = function (next) {
    //     var id = next.params.id;

        ContactListFactory.GetContactsList().get().$promise.then(function (response) {
            ctrl.contactList = response.allContacts;
        });

        ctrl.deleteContact = function(id)
        {
            console.log(id);
            ContactListFactory.DestroyContact(id).destroy().$promise.then(function (response) {
                ctrl.contactList = response.allContacts;
            })
        };
    // };

}
