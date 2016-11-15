'use strict';
var angular = require('angular');
module.exports = angular
  .module('app.main.component', [])
  .component('appMain', {
    templateUrl: '/app/js/main/components/main.template.html',
    controller: MainController,
    transclude: true,
    $routeConfig:
      [
        // {path: '/cars', name: 'CarsLink', component: 'carInfoComponent'},
        // {path: '/contacts', name: 'ContactsLink', component: 'contacts' },
        {path: '/', name: "ContactsList", component: 'mainContactListComponent'},
        {path: '/contact/:id', name: "ShowContact", component: 'showContactComponent'}
      ]
    });

function MainController(){
  var ctrl = this;
}
