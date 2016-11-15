var angular = require('angular'),
    contactList = require('./components/contactList.component.js'),
    createContact = require('./components/createContact.component.js'),
    contactListService = require('./services/contactList.service.js');

module.exports = angular.module("app.contactsListApp", [
    contactList.name,
    createContact.name,
    contactListService.name
]);