var angular = require('angular'),
    contactListComponent = require('../contactList/contactList.module.js'),
    showContactComponent = require('../showContact/showContact.module.js'),
    mainComponent = require('./components/main.component.js');
module.exports = angular.module("app.main", [
  // components
  contactListComponent.name,
  showContactComponent.name,
  mainComponent.name

]);
