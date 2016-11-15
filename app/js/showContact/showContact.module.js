var angular = require('angular'),
    showContact = require('./components/showContact.component.js'),
    showContactService = require('./services/showContact.service.js');

module.exports = angular.module("app.showContactModule", [
    showContact.name,
    showContactService.name
]);