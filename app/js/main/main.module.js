var angular = require('angular'),
    // carsComponent = require('../cars/cars.module.js'),
    // contactsComponent = require('../contacts/contacts.module.js'),
    contactListComponent = require('../contactList/contactList.module.js'),
    showContactComponent = require('../showContact/showContact.module.js'),
    mainComponent = require('./components/main.component.js');
module.exports = angular.module("app.main", [
  // components
  // carsComponent.name,
  // contactsComponent.name,
  contactListComponent.name,
  showContactComponent.name,
  mainComponent.name

]);
