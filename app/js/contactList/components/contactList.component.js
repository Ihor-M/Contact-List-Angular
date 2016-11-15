'use strict';

var angular = require('angular');

module.exports = angular
    .module('app.contactList.component', [])
    .component('mainContactListComponent', {
        templateUrl: '/app/js/contactList/components/contactList.template.html',
        controller: MainContactListController
    });

function MainContactListController() {
    var ctrl = this;
}