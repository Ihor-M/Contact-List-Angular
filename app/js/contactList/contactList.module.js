var angular = require('angular'),
    contactList = require('./components/contactList.component.js'),
    createContact = require('./components/createContact.component.js'),
    showContact = require('./components/showContact.component.js');

module.exports = angular.module("app.contactsListApp", [
    contactList.name,
    createContact.name,
    showContact.name
]);